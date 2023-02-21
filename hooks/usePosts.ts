import { useEffect, useState } from "react";
import { getPosts } from "../models/user-model";
import { DBExposePost } from "../types";

export default function usePosts(key?: string | undefined ) {
    const [posts, setPosts] = useState<Array<DBExposePost>>([]);

    useEffect(() => {

        const getAllPosts = async (key?: string | undefined) => {
            const allPosts = await getPosts(key);
            if(allPosts){
                setPosts(allPosts);
            }
        }
        getAllPosts(key);
    }, []);

    return posts;
}