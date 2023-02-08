import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const InteractionButton = () => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>Expose</Text>
    </TouchableOpacity>
  )
}

export default InteractionButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    text: {
        fontWeight: "bold",
        fontSize: 15
    }
})