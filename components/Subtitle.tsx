import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type SubtitleProps = {
    label: string;
    color?: string;
}

const Subtitle = ({label, color}: SubtitleProps) => {
  return (
    <Text style={[styles.Subtitle, {color: color}]}>{label}</Text>
  )
}

export default Subtitle

const styles = StyleSheet.create({
    Subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 2
    }
})