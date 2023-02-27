//React
import { getDownloadURL, ref } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { storageFirebase } from '../firebase';

export default function usePostImage(imageID: string | undefined) {
    const [URL, setURL] = useState<string>();

    useEffect(() => {

        const setImageURL = async () => {
            const imgRef = ref(storageFirebase, `images/postImages/resizedThumbs/${imageID}_500x500.jpg`);
            
            const imgURL = await getDownloadURL(imgRef);
            setURL(imgURL);
        }

        if (imageID != '' && imageID){
            if (URL == undefined) {setImageURL();}
        }

    },[imageID]);
    return URL;
}
