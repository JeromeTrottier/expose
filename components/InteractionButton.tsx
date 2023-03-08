import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'

type InteractionButtonProps = {
  label: string;
  margin?: number;
  fillRemainingSpace?: boolean;
  color?: string;
}

const InteractionButton = ({label, margin=5, fillRemainingSpace=false, color, ...rest}: InteractionButtonProps & TouchableOpacityProps) => {

  return (
    <TouchableOpacity 
      style={[
        styles.container, 
        { marginRight: margin },
        fillRemainingSpace ? 
        { flex: 1 } :
        {},
        color ? 
        { backgroundColor: color} :
        {}
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