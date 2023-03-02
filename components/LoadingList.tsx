import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Skeleton } from '@rneui/themed'
import { windowWidth } from '../utils/Dimensions'

const LoadingList = () => {
  return (
    <View>
      {[1, 2, 3].map((item) => <Skeleton key={item} style={{marginHorizontal: 20, marginVertical: 10, borderRadius: 10}} width={windowWidth - 40} height={275}/>)}
    </View>
  )
}

export default LoadingList

const styles = StyleSheet.create({})