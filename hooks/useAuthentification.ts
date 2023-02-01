import {Auth, getAuth, onAuthStateChanged, User} from 'firebase/auth';
import { useEffect, useState } from 'react';
import { firebaseApp } from '../firebase';

export default function useAuthentification(userModulator: React.Dispatch<React.SetStateAction<User | undefined>>) {
    const firebaseAuth: Auth = getAuth(firebaseApp);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (user) {
                userModulator(user);
                console.log("Connecté");
            } else {
                console.log("Pas connecté");
                userModulator(undefined);
            }
        })
        return unsubscribe;
    }, []);
}