import { useEffect, useState } from "react";
import { getCommentsFromPost } from "../models/post-model";
import { ExposePostComment } from "../types";

export default function useComments(postID: string, commentTrigger?: boolean) {

    const [comments, setComments] = useState<Array<ExposePostComment>>();

    useEffect(() => {

        const getComments = async () => {
            const newComments = await getCommentsFromPost(postID);
            setComments(newComments);
        }

        getComments();

    }, [commentTrigger]);

    return comments;

}