//React
import { getDownloadURL, ref } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { storageFirebase } from '../firebase';

export default function useProfilePicture(imageID: string | null) {
    const [URL, setURL] = useState<string>();

    useEffect(() => {

        const setImageURL = async () => {
            const imgRef = ref(storageFirebase, `images/profilePictures/resizedPfp/${imageID}_200x200.jpg`);
            try {
                const imgURL = await getDownloadURL(imgRef);
                setURL(imgURL);
            } catch(e:any) {
                console.log(e);
                
            }
            
        }

        if (imageID != '' && imageID){
            if (URL == undefined) {setImageURL();}
        }

    },[imageID]);
    return URL;
}
