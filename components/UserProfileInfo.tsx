import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import UserProfileInfoItem from './UserProfileInfoItem';
import useUserStats from '../hooks/useUserStats';

type UserProfileInfoProps = {
  userID: string
  stateModulator?: boolean
}

const UserProfileInfo = ({userID, stateModulator}: UserProfileInfoProps) => {

  const {followers, posts, exposes} = useUserStats(userID, stateModulator);
  
  return (
    <View style={styles.container}>
      <UserProfileInfoItem label='Abonné(e)s' number={followers}/>
      <UserProfileInfoItem label='Publications' number={posts}/>
      <UserProfileInfoItem label='Exposes' number={exposes}/>
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