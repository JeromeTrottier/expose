import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { HomeTabScreenProps } from '../types'
import FormButton from '../components/FormButton'
import { signOutUser } from '../models/user-model'

const HomeScreen = ({navigation}: HomeTabScreenProps) => {
  return (
    <View style={styles.container}>
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