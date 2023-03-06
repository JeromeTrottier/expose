import { StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { UserContext } from '../contexts/userContext'
import FormInput from '../components/form/FormInput';
import ImagePickerButton from '../components/form/ImagePickerButton';
import { windowWidth } from '../utils/Dimensions';

const SettingsScreen = () => {

  const user = useContext(UserContext);

  const [newDisplayName, setNewDisplayName] = useState('');
  const [newProfilePicURI, setNewProfilePicURI] = useState('');

  return (
    <View>
      <Text style={styles.screenTitle}>Paramètres</Text>
      <Text style={styles.screenSubTitle}>Profil</Text>
      <Text>Photo de profil :</Text>
      <ImagePickerButton
        style={styles.profilePictureContainer}
        onImageChosen={(image) => setNewProfilePicURI(image)}
      />
      <Text>Nom :</Text>
      <FormInput
        placeholder={user?.user.displayName}
        labelValue={newDisplayName}
      />

    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  screenTitle: {
    fontSize: 20, 
    marginHorizontal: 20, 
    marginVertical: 10, 
    fontStyle: 'italic',
    fontWeight: 'bold'
  },
  screenSubTitle: {
    fontSize: 20, 
    marginHorizontal: 20, 
    marginVertical: 10, 
  },
  profilePictureContainer: {
    borderRadius: 10,
    width: windowWidth / 3,
    height: windowWidth / 3,
    shadowOffset: {width: 3, height: 3},
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowRadius: 0
},
})