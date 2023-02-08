import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtherProfileScreenProps } from '../types'

const OtherProfileScreen = ({route, navigation}: OtherProfileScreenProps) => {
  return (
    <View>
      <Text>{route.params.userID}</Text>
    </View>
  )
}

export default OtherProfileScreen

const styles = StyleSheet.create({})