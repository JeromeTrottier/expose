//React
import { getDownloadURL, ref } from 'firebase/storage';
import { useState, useEffect } from 'react';
import { storageFirebase } from '../firebase';

export default function useFirebaseStorageImage(imagePath: string) {
    const [URL, setURL] = useState<string>();

    useEffect(() => {

      const setImageURL = async () => {
        const imgRef = ref(storageFirebase, imagePath);
        
        const imgURL = await getDownloadURL(imgRef);
        setURL(imgURL);
      }

      if (URL == undefined) {setImageURL();}
    },[]);
    return URL;
}
