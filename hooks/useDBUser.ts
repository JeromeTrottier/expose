import { DocumentData } from "firebase/firestore";
import { useEffect, useState } from "react";
import { getUserFromDB } from "../models/user-model";
import { DBExposeUser } from "../types";

export default function useDBUser(userID: string | undefined) {
    const [DBUser, setDBUser] = useState<DBExposeUser>({
        displayName: '',
        username: '',
        email: '',
        profilePictureID: ''
    });

    useEffect(() => {

        const func = async (id: string) => {
            const user = await getUserFromDB(id);
            if (user != undefined) {
                setDBUser({
                    displayName: user.displayName,
                    username: user.username,
                    email: user.email,
                    profilePictureID: user.profilePictureID
                });
            } 
        }
        if (userID) {
            func(userID);
        }
    }, []);

    return DBUser;
}