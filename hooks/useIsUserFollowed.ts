import { useEffect, useState } from "react";
import { getIsUserFollowed } from "../models/user-model";

export default function useIsUserFollowed(userID: string, potentialFollowedUserID: string, following: boolean) {

    const [isUserFollowed, setIsUserFollowed] = useState<boolean>(false);

    useEffect(() => {

        const getIfUserFollowed = async () => {
            const userFollowed = await getIsUserFollowed(userID, potentialFollowedUserID);
            setIsUserFollowed(userFollowed);
        }

        getIfUserFollowed();

    }, [following]);

    return isUserFollowed;

}