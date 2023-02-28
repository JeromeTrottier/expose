import { bdFirestore, firebaseApp } from "../firebase"
import {
    getAuth,
    FacebookAuthProvider,
    signInWithCredential,
    OAuthCredential,
    UserCredential,
    Auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    User,
    updateProfile,
    getAdditionalUserInfo,
    updateCurrentUser,
} from 'firebase/auth'
import {
    LoginManager,
    AccessToken,
} from 'react-native-fbsdk-next'
import { FirebaseError } from "firebase/app";
import { addDoc, collection, deleteDoc, doc, DocumentData, getDoc, getDocs, limit, orderBy, query, setDoc, startAfter, where } from "firebase/firestore";
import { DBExposeUser, ExposeUser, DBExposePost, ExposePostForm, ExposeUserStats } from "../types";
import { uploadImage } from "./image-model";
import 'react-native-get-random-values';
import { v4 as uuidv4} from "uuid";

export const signInWithFacebook = async () => {
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if(result.isCancelled) {
        throw new Error('User cancelled login');
    }
    const data = await AccessToken.getCurrentAccessToken();
    if (!data) {
        throw new Error('Something went wrong obtaining access token');
    }

    const firebaseAuth: Auth = getAuth(firebaseApp);

    const facebookCredential: OAuthCredential = FacebookAuthProvider.credential(data.accessToken);
    const userCredentials: UserCredential = await signInWithCredential(firebaseAuth, facebookCredential);
    console.log('Signed in with Facebook Credentials : ', userCredentials);

    const additionalUserInfo = await getAdditionalUserInfo(userCredentials);

    if (additionalUserInfo?.isNewUser) {
        console.log("creating new user....");
        await createUserInDB(userCredentials.user, {
            username: makeUsername(userCredentials.user.displayName),
            displayName: userCredentials.user.displayName,
            email: userCredentials.user.email,
            profilePictureID: userCredentials.user.photoURL,
        });

        updateCurrentUser(firebaseAuth, userCredentials.user);
    }
    
}

export const createAccountWithLoginInformation= async (exposeUser: ExposeUser) => {

    const firebaseAuth: Auth = getAuth(firebaseApp);

    const userCredentials: UserCredential = await createUserWithEmailAndPassword(firebaseAuth, exposeUser.email, exposeUser.password);
    const user = userCredentials.user;

    createUserInDB(user, {
        username: exposeUser.username,
        displayName: exposeUser.displayName,
        email: exposeUser.email,
        profilePictureID: exposeUser.profilePictureURI,
    });

    console.log('Created account with : ', user.email);
}

export const signInWithLoginInformation = async (email: string, password: string, errorModulator?: React.Dispatch<React.SetStateAction<string>>) => {

    const firebaseAuth: Auth = getAuth(firebaseApp);

    try {
        const userCredentials: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
        const user = userCredentials.user;
        console.log('Logged in with : ', user.email);
    } catch (e: any) {
        if (e instanceof FirebaseError) {
            switch (e.code) {
                case "auth/invalid-email":
                    if (errorModulator) {
                        errorModulator('Attention: Email ou mot de passe invalide.')
                    }
                    break;
                default: 
                    console.log(e.message);
                    break;
            }
        }
    }
}

export const signOutUser = async () => {
    const firebaseAuth: Auth = getAuth(firebaseApp);

    await signOut(firebaseAuth);
}

export const createUserInDB = async (user: User, expoUser: DBExposeUser) => {

    const profilePictureID: string = uuidv4();

    if (expoUser.profilePictureID) {
        await uploadImage(expoUser.profilePictureID, profilePictureID, 'profilePictures');
    }

    await setDoc(
        doc(bdFirestore, "users", user.uid),
        {
            displayName: expoUser.displayName, 
            username: expoUser.username, 
            email: expoUser.email, 
            profilePictureID: profilePictureID
        },
        {merge: true}
    );

    await updateUserInformation(user, {
        displayName: expoUser.displayName,
        photoURL: `images/profilePictures/${profilePictureID}.jpg`
    })

}

export const createPost = async (postInfo: ExposePostForm) => {   

    const imageID: string = uuidv4();

    if (postInfo.imageURI != '') {
        await uploadImage(postInfo.imageURI, imageID, 'postImages');
    }

    console.log("CreatePost : uploaded image");
    
    
    await addDoc(
        collection(bdFirestore, 'posts'),
        {
            title: (postInfo.title === '') ? 'Pas de titre': postInfo.title,
            description: postInfo.description,
            imageID: (postInfo.imageURI !== '') ? imageID : '',
            exposerID: postInfo.exposerID,
            authorID:  postInfo.authorID,
            createdAt: Date.now()
        }
    ).then(async (data) => {
        await addDoc(
            collection(bdFirestore, 'users', postInfo.exposerID, 'posts'),
            {
                postID: data.id
            }
        );
        await addDoc(
            collection(bdFirestore, 'users', postInfo.authorID, 'exposes'),
            {
                postID: data.id
            }
        );
    })
}

export const getPosts = async (lastPostsKey?: number | undefined) => {
    try {
        const postsRef = collection(bdFirestore, "posts");

        const postsQuery = 
            lastPostsKey ? 
                query(postsRef, orderBy('createdAt', 'desc'), startAfter(lastPostsKey), limit(5))
            : 
                query(postsRef, orderBy('createdAt', 'desc'), limit(5));
        

        const postsSnapshot = await getDocs(postsQuery);
        
        const exposes: DBExposePost[] = [];

        await Promise.all(
            postsSnapshot.docs.map(async (post) => {
            const postData = post.data();
            if (postData) {
                exposes.push({
                    title: postData.title,
                    description: postData.description,
                    imageID: postData.imageID,
                    authorID: postData.authorID,
                    exposerID: postData.exposerID,
                    createdAt: postData.createdAt,
                    postID: post.id
                });
            }
            })
        );

        return exposes;

    } catch (e:any) {
        console.warn("ATTENTION : ", e);
    }
    

}

export const getExposesFromUser = async (userID: string) => {
    try {

        const exposesRef = collection(bdFirestore, "users", userID, "exposes");
        
        const querySnapshot = await getDocs(exposesRef);
        const exposes: DBExposePost[] = [];

        await Promise.all(
            querySnapshot.docs.map(async (expose) => {
            const postID = expose.data().postID;
            const postRef = doc(bdFirestore, "posts", postID);
            const exposeSnapshot = await getDoc(postRef);
            const exposePostData = await exposeSnapshot.data();
            if (exposePostData) {
                exposes.push({
                    title: exposePostData.title,
                    description: exposePostData.description,
                    imageID: exposePostData.imageID,
                    authorID: exposePostData.authorID,
                    exposerID: exposePostData.exposerID,
                    createdAt: exposePostData.createdAt,
                    postID: exposeSnapshot.id
                });
            }
            })
        );
    
        return sortByTimestamp(exposes);

    } catch (e: any) {
        console.log(e);
    }
}

export const getUserStat = async (userID: string, path: string) => {
    try {
        const querySnapshot = await getDocs(collection(bdFirestore, "users", userID, path));
        return querySnapshot.size;
    } catch (e: any) {
        console.error("query erreur: ", e)
    }
    return 0;
}

export const updateUserInformation = async (user: User, newUserInfo: {displayName?: string | null | undefined, photoURL?: string | null | undefined}) => {
    await updateProfile(user, newUserInfo);
}

export const getUserFromDB = async (userID: string) => {
    const userRef = doc(bdFirestore, "users", userID);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
        
        const userData = userSnap.data();
        const exposeUserData: DBExposeUser = {
            displayName: userData.displayName,
            email: userData.email,
            profilePictureID: userData.profilePictureID,
            username: userData.username
        }
        return exposeUserData;
    } else {
        console.error("No user with this ID");
        return undefined;
    }
}

const makeUsername = (displayName: string | null) => {
    if (typeof displayName === "string") {
        const username = displayName.toLowerCase().normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, "_") + Math.floor(Math.random()*100);
        return username;
    }
    return null;
}

export const followUser = async (followingUserID: string, userFollowedID: string) => {
    await addDoc(
        collection(bdFirestore, 'users', followingUserID, 'usersFollowed'),
        {
            userFollowedID: userFollowedID
        }
    ).then(async (data) => {
        await addDoc(
            collection(bdFirestore, 'users', userFollowedID, 'followingUsers'),
            {
                followingUser: followingUserID
            }
        );
    })
}

export const unfollowUser = async (followingUserID: string, userFollowedID: string) => {

    const userFollowedDocIDQuery = query(collection(bdFirestore, "users", followingUserID, "usersFollowed"), where("userFollowedID", "==", userFollowedID));
    const followingUserDocIDQuery = query(collection(bdFirestore, "users", userFollowedID, "followingUsers"), where("followingUser", "==", followingUserID));

    const userFollowedDocIDSnapshot = await getDocs(userFollowedDocIDQuery);
    const followingUserDocIDSnapshot = await getDocs(followingUserDocIDQuery);

    const userFollowedDocID: string[] = [];
    const followingUserDocID: string[] = [];

    userFollowedDocIDSnapshot.forEach((userFollowed) => {
        userFollowedDocID.push(userFollowed.id);
    });

    followingUserDocIDSnapshot.forEach((followingUser) => {
        followingUserDocID.push(followingUser.id);
    });
    
    await deleteDoc(doc(bdFirestore, 'users', followingUserID, 'usersFollowed', userFollowedDocID[0]));
    await deleteDoc(doc(bdFirestore, 'users', userFollowedID, 'followingUsers', followingUserDocID[0]));
}

export const getIsUserFollowed = async (userID: string, potentialFollowedUserID: string) => {
    const usersFollowedRef = collection(bdFirestore, "users", userID, "usersFollowed");

    const usersFollowedSnapshot = await getDocs(usersFollowedRef);

    const followedUsers: string[] = [];

    usersFollowedSnapshot.forEach((userFollowed) => {
        if (userFollowed.data().userFollowedID === potentialFollowedUserID) {
            followedUsers.push(userFollowed.data().userFollowedID);
        }
    }) 

    if (followedUsers.length == 1) {
        return true;
    } else {
        return false;
    }
}

export const getSubscribtionPosts = async (userID: string) => {
    const userFollowedIDs = await getUsersFollowedIDs(userID);

    if (userFollowedIDs) {
        const feedExposes: DBExposePost[] = [];

        await Promise.all(
            userFollowedIDs.map(async (id) => {
                const exposes = await getExposesFromUser(id);
                exposes?.forEach((expose) => {
                    feedExposes.push(expose);
                })
            })
        );
        return sortByTimestamp(feedExposes);
    }

    return [];
}

const getUsersFollowedIDs = async (userID: string) => {
    try {
        const querySnapshot = await getDocs(collection(bdFirestore, "users", userID, "usersFollowed"));

        const usersFollowedIDs: string[] = [];

        querySnapshot.forEach((user) => {
            usersFollowedIDs.push(user.data().userFollowedID);
        });

        return usersFollowedIDs;
    } catch (e: any) {
        console.warn(e);   
    }
}

const sortByTimestamp = (array: DBExposePost[]) => {
    return array.sort(function(x: DBExposePost, y: DBExposePost){
        if (x.createdAt < y.createdAt) return 1
        if (x.createdAt > y.createdAt) return -1 
        return 0
    })
} 