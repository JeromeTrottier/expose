import { StyleSheet, View} from 'react-native'
import React, { useCallback, useState } from 'react'
import { HomeTabScreenProps } from '../types'
import usePosts from '../hooks/usePosts'
import HomePostsList from '../components/HomePostsList'
import Colors from '../constants/Colors'
import { RefreshControl, ScrollView } from 'react-native-gesture-handler'

const HomeScreen = ({navigation}: HomeTabScreenProps) => {
  return (
    <View style={styles.container}>
      <HomePostsList
        headerComponent={
            <View style={styles.header}></View>
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