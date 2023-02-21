import { useEffect, useState } from "react";
import { getExposesFromUser } from "../models/user-model";
import { DBExposePost } from "../types";

export default function useExposes(userID: string) {
    const [exposes, setExposes] = useState<Array<DBExposePost>>([]);

    useEffect(() => {
        const func = async () => {

            const exposesData = await getExposesFromUser(userID);
            
            if (exposesData) {
                setExposes(exposesData);
            } 
        }

        func();
    }, []);

    return exposes;
}