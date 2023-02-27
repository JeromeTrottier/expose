import { useEffect, useState } from "react";
import { getPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function usePosts(refreshing: boolean, newPostsTrigger: boolean) {
    const [posts, setPosts] = useState<Array<DBExposePost>>([]);
    const [lastPostKey, setLastPostKey] = useState<number>(0);

    useEffect(() => {
        const getInitialPosts = async () => {

            if (refreshing) {
                setLastPostKey(0);
            }

            const newPosts = await getPosts(lastPostKey);

            if (!refreshing) {
                if(newPosts && newPosts.length !== 0){
                    setPosts([...posts, ...newPosts]);
                    const newKey: number = newPosts[newPosts.length - 1].createdAt;
                    setLastPostKey(newKey);
                } else {
                    alert("Pas plus de publications disponibles...")
                }
            } else {
                setPosts([]);
            }
        }
        
        getInitialPosts();
    }, [refreshing, newPostsTrigger]);

    return posts;
}