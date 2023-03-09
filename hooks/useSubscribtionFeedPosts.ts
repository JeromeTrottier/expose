import { useEffect, useState } from "react";
import { getSubscribtionPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function useSubscribtionFeedPosts(refreshing: boolean, userID: string) {

    const [posts, setPosts] = useState<Array<DBExposePost>>([]);

    useEffect(() => {

        if (!refreshing) {
            const getPosts = async () => {
                const exposes = await getSubscribtionPosts(userID);
                setPosts(exposes);
            }
    
            getPosts(); 
        } else {
            setPosts([]);
        }
        
    }, [refreshing]);

    return posts;

}