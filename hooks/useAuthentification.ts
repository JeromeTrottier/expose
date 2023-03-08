import {Auth, getAuth, onAuthStateChanged, User} from 'firebase/auth';
import { DocumentData } from 'firebase/firestore';
import { useEffect, useId, useState } from 'react';
import { firebaseApp } from '../firebase';
import { createUserInDB, getUserFromDB } from '../models/user-model';

export default function useAuthentification(userModulator: React.Dispatch<React.SetStateAction<DocumentData | undefined>>) {
    const firebaseAuth: Auth = getAuth(firebaseApp);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
            if (user) {
                const userData = await getUserFromDB(user.uid);
                console.log("Data : ", userData);
                if (userData !== undefined) {
                    userModulator({userData, user});
                } else {
                    userModulator(undefined);
                }
            } else {
                console.log("Pas connecté");
                userModulator(undefined);
            }
        })
        return unsubscribe;
    }, []);
}