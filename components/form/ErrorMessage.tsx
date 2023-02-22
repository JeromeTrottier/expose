import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type ErrorMessageProps = {
    message: string;
}

const ErrorMessage = ({message}: ErrorMessageProps) => {

    const isMessageActive: boolean = message.length >= 1;
    
    return (
        <View>
            {
                isMessageActive ? 
                <Text style={styles.text}>{message}</Text>
                : 
                <></>
            }
            
        </View>
    )
}

export default ErrorMessage

const styles = StyleSheet.create({
    text: {
        color: 'red'
    }
})