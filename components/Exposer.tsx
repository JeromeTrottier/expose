import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import useDBUser from '../hooks/useDBUser';

type ExposerProps = {
    exposerID: string;
}

const Exposer = ({exposerID}: ExposerProps) => {

    const {displayName} = useDBUser(exposerID);

  return (
    <View>
      <Text style={{fontSize: 15}}>Exposé par <Text style={{fontWeight: 'bold'}}>{displayName}</Text></Text>
    </View>
  )
}

export default Exposer

const styles = StyleSheet.create({

})