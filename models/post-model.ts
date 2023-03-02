import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { bdFirestore } from "../firebase";
import { DBExposePost, ExposePostComment, ExposePostStats } from "../types";

export const getPostByID = async (postID: string): Promise<DBExposePost| undefined> => {
    try {
        const postRef = doc(bdFirestore, "posts", postID);

        const postSnapshot = await getDoc(postRef);
        const postData = postSnapshot.data();
        if (postData) {
            return {
                title: postData.title,
                description: postData.description,
                imageID: postData.imageID,
                authorID: postData.authorID,
                exposerID: postData.exposerID,
                createdAt: postData.createdAt,
                postID: postSnapshot.id
            };
        }
    } catch (e:any) {
        console.warn("ATTENTION : ", e);
    }
}

export const upvotePost = async (userID: string, postID: string) => {
    try {
        await addDoc(
            collection(bdFirestore, 'users', userID, 'postsUpvoted'),
            {
                upvotedPostID: postID
            }
        ).then(async () => {
            await addDoc(
                collection(bdFirestore, 'posts', postID, 'upvotedBy'),
                {
                    userID: userID
                }
            );
        })
    } catch (e:any) {
        console.log(e);
        
    }
}

export const downvotePost = async (userID:string, postID: string) => {
    try {
        await addDoc(
            collection(bdFirestore, 'users', userID, 'postsDownvoted'),
            {
                downvotedPostID: postID
            }
        ).then(async () => {
            await addDoc(
                collection(bdFirestore, 'posts', postID, 'downvotedBy'),
                {
                    userID: userID
                }
            );
        })
    } catch (e:any) {
        console.log(e);
        
    }
}

export const undoUpvotePost = async (userID: string, postID: string) => {

    const postDocIDQuery = query(collection(bdFirestore, "users", userID, "postsUpvoted"), where("upvotedPostID", "==", postID));
    const userDocIDQuery = query(collection(bdFirestore, "posts", postID, "upvotedBy"), where("userID", "==", userID));

    const postDocIDSnapshot = await getDocs(postDocIDQuery);
    const userDocIDSnapshot = await getDocs(userDocIDQuery);

    const postDocID: string[] = [];
    const userDocID: string[] = [];

    postDocIDSnapshot.forEach((post) => {
        postDocID.push(post.id);
    });

    userDocIDSnapshot.forEach((user) => {
        userDocID.push(user.id);
    });
    

    await deleteDoc(doc(bdFirestore, 'posts', postID, 'upvotedBy', userDocID[0]));
    await deleteDoc(doc(bdFirestore, 'users', userID, 'postsUpvoted', postDocID[0]));

}
export const undoDownvotePost = async (userID: string, postID: string) => {

    const postDocIDQuery = query(collection(bdFirestore, "users", userID, "postsDownvoted"), where("downvotedPostID", "==", postID));
    const userDocIDQuery = query(collection(bdFirestore, "posts", postID, "downvotedBy"), where("userID", "==", userID));

    const postDocIDSnapshot = await getDocs(postDocIDQuery);
    const userDocIDSnapshot = await getDocs(userDocIDQuery);

    const postDocID: string[] = [];
    const userDocID: string[] = [];

    postDocIDSnapshot.forEach((post) => {
        postDocID.push(post.id);
    });

    userDocIDSnapshot.forEach((user) => {
        userDocID.push(user.id);
    });
    
    

    await deleteDoc(doc(bdFirestore, 'posts', postID, 'downvotedBy', userDocID[0]));
    await deleteDoc(doc(bdFirestore, 'users', userID, 'postsDownvoted', postDocID[0]));

}

export const getPostRatings = async (postID: string): Promise<ExposePostStats> => {
    const usersWhoUpvoted = collection(bdFirestore, "posts", postID, "upvotedBy");

    const usersWhoUpvotedSnapshot = await getDocs(usersWhoUpvoted);

    const usersWhoDownvoted = collection(bdFirestore, "posts", postID, "downvotedBy");

    const usersWhoDownvotedSnapshot = await getDocs(usersWhoDownvoted);

    return {
        upvotes: usersWhoUpvotedSnapshot.size,
        downvotes: usersWhoDownvotedSnapshot.size
    }
}

export const postComment = async (postID: string, comment: ExposePostComment) => {
    try {
        await addDoc(
            collection(bdFirestore, 'posts', postID, 'comments'),
            {   
                text: comment.text,
                authorID: comment.authorID
            }
        )
    } catch (e: any) {
        console.log(e);
    }
}

export const getCommentsFromPost = async (postID: string) => {
    try {

        const commentsRef = collection(bdFirestore, "posts", postID, "comments");

        const commentsSnapshot = await getDocs(commentsRef);

        const comments: ExposePostComment[] = [];

        commentsSnapshot.forEach((comment) => {
            const commentData = comment.data();
            comments.push({
                text: commentData.text,
                authorID: commentData.authorID
            })
        })

        return comments;

    } catch (e: any) {
        console.log(e);
        
    }
}