import { useEffect, useState } from "react";
import { getPostByID } from "../models/post-model";
import { DBExposePost } from "../types";


export default function usePost(postID: string) {
    

    const [post, setPost] = useState<DBExposePost>();

    useEffect(() => {
        const getPost = async () => {
            const newPost = await getPostByID(postID);
            setPost(newPost);
        }

        getPost();
    }, []);

    return post;
}