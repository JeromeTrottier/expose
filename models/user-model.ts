import { firebaseApp } from "../firebase"
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
} from 'firebase/auth'
import {
    LoginManager,
    AccessToken,
} from 'react-native-fbsdk-next'

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
    const user: UserCredential = await signInWithCredential(firebaseAuth, facebookCredential);
    console.log('Signed in with Facebook Credentials : ', user);
}

export const createAccountWithLoginInformation= async (email: string, password: string) => {

    const firebaseAuth: Auth = getAuth(firebaseApp);

    const userCredentials: UserCredential = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    const user = userCredentials.user;

    console.log('Created account with : ', user.email);
}

export const signInWithLoginInformation = async (email: string, password: string) => {

    const firebaseAuth: Auth = getAuth(firebaseApp);

    const userCredentials: UserCredential = await signInWithEmailAndPassword(firebaseAuth, email, password);
    const user = userCredentials.user;
    console.log('Logged in with : ', user.email);
}

export const signOutUser = async () => {

    const firebaseAuth: Auth = getAuth(firebaseApp);

    await signOut(firebaseAuth);
}