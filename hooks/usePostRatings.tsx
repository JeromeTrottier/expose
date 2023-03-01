import { useEffect, useState } from "react";
import { getPostRatings } from "../models/post-model";
import { hasUserAlreadyDownvotedPost, hasUserAlreadyUpvotedPost } from "../models/user-model";
import { ExposePostStats } from "../types";

export default function usePostRatings(postID: string, postRatingTrigger: boolean, userID?: string) {

    const [postRatings, setPostRatings] = useState<ExposePostStats>();
    const [hasUserUpvoted, setHasUserUpvoted] = useState<boolean | undefined>(false);
    const [hasUserDownvoted, setHasUserDownvoted] = useState<boolean | undefined>(false);

    useEffect(() => {

        const getPostStats = async () => {
            const postStats = await getPostRatings(postID);
            setPostRatings(postStats);
        }

        const getHasUpvoted = async (id: string) => {
            const hasUpvoted = await hasUserAlreadyUpvotedPost(id, postID);
            setHasUserUpvoted(hasUpvoted);
        }

        const getHasDownvoted = async (id: string) => {
            const hasDownvoted = await hasUserAlreadyDownvotedPost(id, postID);
            setHasUserDownvoted(hasDownvoted);
        }

        getPostStats();

        if (userID) {
            getHasUpvoted(userID);
            getHasDownvoted(userID);
        }

    }, [postRatingTrigger]);

    return {postRatings, hasUserUpvoted, hasUserDownvoted};
}