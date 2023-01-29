import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TitleProps = {
    label: string;
    color?: string;
}

const Title = ({label, color}: TitleProps) => {
  return (
    <Text style={[styles.title, {color: color}]}>{label}</Text>
  )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 5
    }
})