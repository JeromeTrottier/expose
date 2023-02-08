import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getUserFromDB } from "../models/user-model";
import { DBExposeUser } from "../types";

export default function useDBUser(userID: string) {
    const [DBUser, setDBUser] = useState<DBExposeUser>({
        displayName: '',
        username: '',
        email: '',
        profilePictureID: ''
    });

    useEffect(() => {

        const func = async () => {
            const user = await getUserFromDB(userID);
            if (user != undefined) {
                setDBUser({
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email,
                    profilePictureID: user.profilePictureID
                });
            } 
        }

        func();
    }, []);

    return DBUser;
}