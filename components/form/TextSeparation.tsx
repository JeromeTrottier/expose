import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TextSeparationProps = {
    label: string;
}

const TextSeparation = ({label}: TextSeparationProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}></View>
      <Text style={styles.text}>{label}</Text>
      <View style={styles.line}></View>
    </View>
  )
}

export default TextSeparation

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15
    },
    line: {
        marginHorizontal: 10,
        flexGrow: 1,
        height: 2,
        backgroundColor: 'black'
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: '700'
    }
})