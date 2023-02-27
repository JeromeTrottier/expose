import { useEffect, useState } from "react";
import { getPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function usePosts(refreshing: boolean, key?: number | undefined) {
    const [initialPosts, setInitialPosts] = useState<Array<DBExposePost>>([]);
    const [lastPostKey, setLastPostKey] = useState<number>(0);

    useEffect(() => {
        const getInitialPosts = async () => {
            const newPosts = await getPosts(key);
            
            if(newPosts){
                setInitialPosts(newPosts);
                setLastPostKey(newPosts[newPosts.length - 1].createdAt);
            } 
        }
        
        getInitialPosts();
    }, [refreshing ? refreshing : null]);

    return {initialPosts, lastPostKey};
}