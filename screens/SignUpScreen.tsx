import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import { Icon } from '@rneui/themed'
import Colors from '../constants/Colors'
import FormInput from '../components/FormInput'
import FormButton from '../components/FormButton'
import TextSeparation from '../components/TextSeparation'
import SocialButton from '../components/SocialButton'

const SignUpScreen = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
        <Title
            label='Créer un compte'
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
            title='Enregistrer'
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
                />
            </View>
        </View>
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