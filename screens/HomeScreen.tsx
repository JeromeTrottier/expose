import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { HomeScreenProps } from '../types'
import { View } from 'react-native'
import FormButton from '../components/FormButton'
import { signOutUser } from '../models/user-model'


const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
        <Text>Home</Text>
        <FormButton
          title='Déconnecter'
          color='black'
          onPress={signOutUser}
        />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})