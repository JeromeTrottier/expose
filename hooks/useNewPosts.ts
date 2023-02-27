import { useEffect, useState } from "react";
import { getPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function useNewPosts(isNewPostsNeeded: boolean, key?: number | undefined) {
    const [posts, setPosts] = useState<Array<DBExposePost>>([]);

    const [lastPostKey, setLastPostKey] = useState<number>();

    useEffect(() => {
        const getNewPosts = async (key?: number | undefined) => {
            const newPosts = await getPosts(key);
            
            if(newPosts){
                setPosts([...posts, ...newPosts]);
                setLastPostKey(newPosts[newPosts.length - 1].createdAt);
            }
        }
        if (isNewPostsNeeded) {
            getNewPosts(lastPostKey);
        }
    }, [isNewPostsNeeded]);

    return posts;
}