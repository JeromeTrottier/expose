import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormButton from '../components/form/FormButton'

import Colors from '../constants/Colors'
import FormInput from '../components/form/FormInput'

import { Icon } from '@rneui/themed'
import SocialButton from '../components/form/SocialButton'
import TextButton from '../components/form/TextButton'
import { LoginScreenProps } from '../types'
import Title from '../components/Title'
import TextSeparation from '../components/form/TextSeparation'
import { signInWithFacebook, signInWithLoginInformation } from '../models/user-model'
import ErrorMessage from '../components/form/ErrorMessage'

const LoginScreen = ({navigation}: LoginScreenProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    return (
        <View style={styles.container}>
            <Title
                label='Bienvenue sur Expose'
                color={Colors.light.text}
            />
            <ErrorMessage 
                message={error}
            />
            <FormInput
                labelValue={email}
                placeholder='E-mail'
                iconComponent={
                    <Icon
                        name='user'
                        type='font-awesome-5'
                        solid={true}
                    />
                }
                onChangeText={(text) => setEmail(text)}
                textContentType='emailAddress'
                autoCapitalize='none'
                autoCorrect={false}
                keyboardType='email-address'
            />
            <FormInput
                labelValue={password}
                placeholder='Mot de passe'
                iconComponent={
                    <Icon
                        name='lock'
                        type='font-awesome-5'
                        solid={true}
                    />
                }
                onChangeText={(text) => setPassword(text)}
                autoComplete={'off'}
                secureTextEntry={true}
                textContentType='password'
            />
            <FormButton
                title='Se connecter'
                color={Colors.light.tint}
                onPress={() => signInWithLoginInformation(email, password, setError)}
            />
            <TextButton
                title='Mot de passe oublié?'
                color={Colors.light.tint}
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
            <TextButton
                title='Pas de compte? Créez en un ici'
                color={Colors.light.tint}
                onPress={() => navigation.navigate("SignUp")}
            />
        </View>
    )
}

export default LoginScreen

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
});