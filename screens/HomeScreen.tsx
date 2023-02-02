import { StyleSheet, Text} from 'react-native'
import React from 'react'
import { HomeScreenProps } from '../types'
import FormButton from '../components/FormButton'
import { signOutUser } from '../models/user-model'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <SafeAreaView>
        <Text>Home</Text>
        <FormButton
          title='Déconnecter'
          color='black'
          onPress={signOutUser}
        />
    </SafeAreaView>
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