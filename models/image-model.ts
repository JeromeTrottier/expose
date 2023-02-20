import { ref, uploadBytes } from "firebase/storage";
import { storageFirebase } from "../firebase";

export const uploadImage = async (imageURI: string, imageName: string, path: string) => {

    //Create image Ref in storage
    const imageRef = ref(storageFirebase, `images/${path}/${imageName}.jpg`);
    

    // //convert image to array of Bytes
    const img = await fetch(imageURI);
    
    const imgBytes = await img.blob();
    

    //upload image to Firebase
    await uploadBytes(imageRef, imgBytes);
}