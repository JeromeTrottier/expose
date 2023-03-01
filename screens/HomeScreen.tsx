import { StyleSheet, View} from 'react-native'
import React, { useCallback, useState } from 'react'
import { HomeScreenProps, HomeTabScreenProps } from '../types'
import HomePostsList from '../components/HomePostsList'
import Colors from '../constants/Colors'

const HomeScreen = ({navigation}: HomeScreenProps) => {
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