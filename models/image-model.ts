import { ref, uploadBytes } from "firebase/storage";
import { storageFirebase } from "../firebase";

export const uploadImage = async (imageURI: string, imageName: string) => {

    console.log(imageURI);
    

    //Create image Ref in storage
    const imageRef = ref(storageFirebase, `images/profilePictures/${imageName}.jpg`);
    console.log(imageRef);
    

    //convert image to array of Bytes
    const img = await fetch(imageURI);

    console.log(img);
    
    const imgBytes = await img.blob();
    console.log(imgBytes);
    

    //upload image to Firebase
    await uploadBytes(imageRef, imgBytes);
}
