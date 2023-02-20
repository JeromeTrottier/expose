import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserProfileInfoItem from './UserProfileInfoItem';

type UserProfileInfoProps = {
  followers?: number;
  posts?: number;
  exposes?: number;
}

const UserProfileInfo = ({followers, posts, exposes}: UserProfileInfoProps) => {
  return (
    <View style={styles.container}>
      <UserProfileInfoItem label='Abonnées' />
      <UserProfileInfoItem label='Publications'/>
      <UserProfileInfoItem label='Exposes'/>
    </View>
  )
}

export default UserProfileInfo

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderColor: 'black',
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10
  }
})