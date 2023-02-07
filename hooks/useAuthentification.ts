import {Auth, getAuth, onAuthStateChanged, User} from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { firebaseApp } from '../firebase';
import { createUserInDB, getUserFromDB } from '../models/user-model';

export default function useAuthentification(userModulator: React.Dispatch<React.SetStateAction<DocumentData | undefined>>) {
    const firebaseAuth: Auth = getAuth(firebaseApp);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                const userData = getUserFromDB(user.uid);
                userModulator(userData);
            } else {
                console.log("Pas connecté");
                userModulator(undefined);
            }
        })
        return unsubscribe;
    }, []);
}