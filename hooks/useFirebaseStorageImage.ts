//React
import { getDownloadURL, ref } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { storageFirebase } from '../firebase';

export default function useFirebaseStorageImage(imageID: string) {
    const [URL, setURL] = useState<undefined | string>(undefined);

    useEffect(() => {

      const setImageURL = async () => {
        const imgRef = ref(storageFirebase, imageID);
        
        const imgURL = await getDownloadURL(imgRef);
        setURL(imgURL);
      }

      if (URL == undefined) {setImageURL();}
    },[]);
    return URL;
}
