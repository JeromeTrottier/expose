import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import { Icon } from '@rneui/themed'
import Colors from '../constants/Colors'
import FormInput from '../components/form/FormInput'
import FormButton from '../components/form/FormButton'
import TextSeparation from '../components/form/TextSeparation'
import SocialButton from '../components/form/SocialButton'
import { createAccountWithLoginInformation, signInWithFacebook } from '../models/user-model'
import { ExposeUser } from '../types'
import ImagePickerButton from '../components/form/ImagePickerButton'
import { ScrollView } from 'react-native-gesture-handler'

const SignUpScreen = () => {

    const [newUserInfo, setNewUserInfo] = useState<ExposeUser>({
        displayName: '',
        username: '',
        email: '',
        password: '',
        profilePictureURI: ''
    });

    const handleAccountCreation = () => {

        if(newUserInfo.displayName === '') {
            alert('Pas de nom entré')
            return;
        }
        if(newUserInfo.username === '') {
            alert('Pas de pseudonyme entré')
            return;
        }
        if(newUserInfo.password === '') {
            alert('Pas de mot de passe entré')
            return;
        }
        if(newUserInfo.email === '') {
            alert('Pas de email entré')
            return;
        }
        if(newUserInfo.profilePictureURI === '') {
            alert("Pas d'image de profil entrée")
            return;
        }

        createAccountWithLoginInformation(newUserInfo);
    }

    return (
        <ScrollView>
            <View style={styles.container}>
        <Title
            label='Créer un compte'
            color={Colors.light.tint}
        />
        <FormInput
            labelValue={newUserInfo.email}
            placeholder='E-mail'
            iconComponent={
                <Icon
                    name='email'
                    type='material-community-icons'
                    solid={true}
                />
            }
            onChangeText={(text) => setNewUserInfo({...newUserInfo, email: text})}
            textContentType='emailAddress'
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='email-address'
        />
        <FormInput
            labelValue={newUserInfo.password}
            placeholder='Mot de passe'
            iconComponent={
                <Icon
                    name='lock'
                    type='font-awesome-5'
                    solid={true}
                />
            }
            onChangeText={(text) => setNewUserInfo({...newUserInfo, password: text})}
            autoComplete={'off'}
            secureTextEntry={true}
            textContentType='password'
        />
        <FormInput
            labelValue={newUserInfo.displayName}
            placeholder='Nom complet'
            iconComponent={
                <Icon
                    name='user'
                    type='font-awesome-5'
                    solid={true}
                />
            }
            onChangeText={(text) => setNewUserInfo({...newUserInfo, displayName: text})}
            autoComplete={'off'}
            textContentType='name'
        />
        <FormInput
            labelValue={newUserInfo.username}
            placeholder='Pseudonyme'
            iconComponent={
                <Icon
                    name='label'
                    type='material-community-icons'
                    solid={true}
                />
            }
            onChangeText={(text) => setNewUserInfo({...newUserInfo, username: text})}
            autoComplete={'off'}
            textContentType='nickname'
        />
        <ImagePickerButton
            onImageChosen={(imageURI) => setNewUserInfo({...newUserInfo, profilePictureURI: imageURI})}
        />
        <FormButton
            title='Enregistrer'
            color={Colors.light.tint}
            onPress={handleAccountCreation}
        />
        <TextSeparation 
                label='OU'
            />
            <View style={styles.socialMediaButtonList}>
               <SocialButton 
                    iconComponent={
                        <Icon
                            name='facebook'
                            type='font-awesome'
                            color='white'
                        />
                    }
                    onPress={signInWithFacebook}
                    color={'#1877f2'}
                />
            </View>
        </View>
        </ScrollView>
    )
}

export default SignUpScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialMediaButtonList: {
        display: 'flex',
        flexDirection: 'row',
    }
})