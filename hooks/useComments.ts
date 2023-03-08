import { useEffect, useState } from "react";
import { getCommentsFromPost } from "../models/post-model";
import { ExposePostComment } from "../types";

export default function useComments(postID: string, commentTrigger?: boolean) {

    const [comments, setComments] = useState<Array<ExposePostComment>>(); // État initial des commentaires à retourner

    useEffect(() => { // Fonction qui s'exécute à chaque fois que l'état de commentTrigger change

        const getComments = async () => { // Fonction qui va chercher tous les commentaires du post donné
            const newComments = await getCommentsFromPost(postID); // Chercher les commentaires
            setComments(newComments); // Assigner les commentaires chercher à l'état des commentaires initial
        }

        getComments();

    }, [commentTrigger]);

    return comments; // Return les commentaires

}