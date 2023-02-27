import { useEffect, useState } from "react";
import { getPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function useNewPosts(isNewPostsNeeded: boolean, key: number) {
    const [posts, setPosts] = useState<Array<DBExposePost>>([]);

    const [lastPostKey, setLastPostKey] = useState<number>(key);
    const [firstTimeLoadingMore, setFirstTimeLoadingMore] = useState<boolean>(true);

    // console.log(key, lastPostKey);
    

    useEffect(() => {

        if (firstTimeLoadingMore) {
            setLastPostKey(key);
            setFirstTimeLoadingMore(false);
        }

        const getNewPosts = async (key?: number | undefined) => {
            const newPosts = await getPosts(key);
            console.log(newPosts);
            
            if(newPosts){
                setPosts([...posts, ...newPosts]);
                
                
                setLastPostKey(newPosts[newPosts.length - 1].createdAt);
            }
        }
        if (isNewPostsNeeded) {
            console.log(lastPostKey);
            getNewPosts(lastPostKey);
            
            
        }
    }, [isNewPostsNeeded]);

    return posts;
}