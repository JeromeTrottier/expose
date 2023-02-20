import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

type InteractionButtonProps = {
  label: string;
  padding?: number;
  margin?: number;
}

const InteractionButton = ({label, padding=15, margin=5, ...rest}: InteractionButtonProps & TouchableOpacityProps) => {

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        {
          paddingHorizontal: padding, 
          marginRight: margin,
        }
      ]}
      {...rest}
    >
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
}

export default InteractionButton

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 5,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: 'black',
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontWeight: '600',
        fontSize: 15
    }
})