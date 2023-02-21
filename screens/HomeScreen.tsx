import { StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { HomeTabScreenProps } from '../types'
import FormButton from '../components/FormButton'
import { signOutUser } from '../models/user-model'
import usePosts from '../hooks/usePosts'
import HomePostsList from '../components/HomePostsList'
import Colors from '../constants/Colors'

const HomeScreen = ({navigation}: HomeTabScreenProps) => {

  const posts = usePosts();

  console.log("Posts: ", posts);
  

  return (
    <View style={styles.container}>
      <HomePostsList
        headerComponent={
          <View style={styles.header}>
          </View>
        }
      />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
      backgroundColor: Colors.light.background,
      flex: 1,
    },
    header: {
      marginTop: 20
    }
})