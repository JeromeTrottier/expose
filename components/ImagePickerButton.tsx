import { StyleSheet, Button, View, Image } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';

interface ImagePickerButtonProps {
    onImageChosen: ((imageURI: string) => void);
}

const ImagePickerButton = ({onImageChosen}: ImagePickerButtonProps) => {

    const [image, setImage] = useState('');

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setImage(result.assets[0].uri);
            onImageChosen(result.assets[0].uri);
        }
      };

    return (
        <View>
            <Button
                title="Pick image"
                onPress={pickImage}
            />
            {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
        </View>
    )
}

export default ImagePickerButton

const styles = StyleSheet.create({})