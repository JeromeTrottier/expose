import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import FormButton from '../components/FormButton'

import Colors from '../constants/Colors'
import FormInput from '../components/FormInput'

import { Icon } from '@rneui/themed'
import SocialButton from '../components/SocialButton'
import TextButton from '../components/TextButton'
import { LoginScreenProps } from '../types'
import Title from '../components/Title'
import TextSeparation from '../components/TextSeparation'
import { signInWithFacebook } from '../models/user-model'

const LoginScreen = ({navigation}: LoginScreenProps) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Title
                label='Se connecter'
                color={Colors.light.tint}
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
                onPress={() => alert('Vous voulez vous connecter!')}
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
                            name='google'
                            type='font-awesome'
                            reverse={true}
                            color={'#da483b'}
                        />
                    }
                />
                <SocialButton 
                    iconComponent={
                        <Icon
                            name='facebook'
                            type='font-awesome'
                            reverse={true}
                            color={'#1877f2'}
                        />
                    }
                    onPress={signInWithFacebook}
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