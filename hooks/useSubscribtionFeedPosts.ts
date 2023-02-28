import { useEffect, useState } from "react";
import { getSubscribtionPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function useSubscribtionFeedPosts(userID: string) {

    const [posts, setPosts] = useState<Array<DBExposePost>>([]);

    useEffect(() => {

        const getPosts = async () => {
            const exposes = await getSubscribtionPosts(userID);
            setPosts(exposes);
        }

        getPosts();
    }, []);

    return posts;

}