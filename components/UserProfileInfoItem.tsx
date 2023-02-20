import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type UserProfileInfoItemProps = {
    label: string;
    number?: number;
}

const UserProfileInfoItem = ({label, number=0}: UserProfileInfoItemProps) => {
  return (
    <View style={styles.container}>
      <Text>{number}</Text>
      <Text style={styles.label}>{label}</Text>
    </View>
  )
}

export default UserProfileInfoItem

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    label: {
        fontWeight: '600'
    }
})