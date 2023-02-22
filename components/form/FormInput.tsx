import { StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../../utils/Dimensions'



type FormInputProps = {
    labelValue: string;
    placeholder?: string;
    iconComponent?: React.ReactNode;
    style?: ViewStyle
}

const FormInput = ({labelValue, placeholder='Placeholder...', iconComponent, style, ...rest}: FormInputProps & TextInputProps) => {
  return (
    <View style={[styles.inputContainer, style]}>
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
        height: windowHeight / 11,
        backgroundColor: '#fff',
        borderColor: 'black',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0
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