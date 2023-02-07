import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type UserResultProps = {
    displayName: string
}

const UserResult = ({displayName}: UserResultProps) => {
  return (
    <View>
      <Text>{displayName}</Text>
    </View>
  )
}

export default UserResult

const styles = StyleSheet.create({})