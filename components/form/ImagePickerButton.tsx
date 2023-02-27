import { StyleSheet, Button, View, Image, ViewProps, StyleProp, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import { windowHeight, windowWidth } from '../../utils/Dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

interface ImagePickerButtonProps {
    onImageChosen: ((imageURI: string) => void);
    style?: ViewStyle
}

const ImagePickerButton = ({onImageChosen, style}: ImagePickerButtonProps) => {

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
    
        if (result.assets) {
            setImage(result.assets[0].uri);
            onImageChosen(result.assets[0].uri);
        }
      };

    return (
        <TouchableOpacity onPress={pickImage}>
            <View style={[styles.container, style]}>
                {!image && <Icon name='image' type='feather'/>}
                {image && <Image source={{ uri: image }} style={{ width: '100%', height: '100%' }} />}
            </View>
        </TouchableOpacity>
        
    )
}

export default ImagePickerButton

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        width: windowHeight / 10,
        height: windowHeight / 10,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0
    }
})