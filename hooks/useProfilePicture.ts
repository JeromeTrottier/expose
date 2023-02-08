//React
import { getDownloadURL, ref } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { storageFirebase } from '../firebase';

export default function useProfilePicture(imageID: string | null) {
    const [URL, setURL] = useState<string>();

    useEffect(() => {

        const setImageURL = async () => {
            const imgRef = ref(storageFirebase, `images/profilePictures/${imageID}.jpg`);
            
            const imgURL = await getDownloadURL(imgRef);
            setURL(imgURL);
        }

        if (imageID != '' && imageID){
            if (URL == undefined) {setImageURL();}
        }

    },[imageID]);
    return URL;
}
