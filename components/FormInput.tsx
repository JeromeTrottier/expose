import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../utils/Dimensions'



type FormInputProps = {
    labelValue: string;
    placeholder?: string;
    iconComponent?: React.ReactNode;
}

const FormInput = ({labelValue, placeholder='Placeholder...', iconComponent, ...rest}: FormInputProps & TextInputProps) => {
  return (
    <View style={styles.inputContainer}>
        <View style={styles.inputIcon}>
            { iconComponent }
        </View>
        <TextInput
            value={labelValue}
            style={styles.inputText}
            numberOfLines={1}
            placeholder={placeholder}
            {...rest}
        />
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        padding: 10,
        width: windowWidth - 100,
        height: windowHeight / 15,
        backgroundColor: '#fff',
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 50
    },
    inputText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
        width: '80%',
    }, 
    inputIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20%',
    }
})