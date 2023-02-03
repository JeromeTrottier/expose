import {Auth, getAuth, onAuthStateChanged, User} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { firebaseApp } from '../firebase';
import { createUserInDB } from '../models/user-model';

export default function useAuthentification(userModulator: React.Dispatch<React.SetStateAction<User | undefined>>) {
    const firebaseAuth: Auth = getAuth(firebaseApp);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                userModulator(user);
                createUserInDB(user.uid, user.displayName, user.email);
            } else {
                console.log("Pas connecté");
                userModulator(undefined);
            }
        })
        return unsubscribe;
    }, []);
}