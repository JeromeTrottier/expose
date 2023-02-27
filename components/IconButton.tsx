import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack';



interface IconButtonProps {
    iconComponent: React.ReactNode;
}

const IconButton = ({iconComponent, ...rest}: IconButtonProps & TouchableOpacityProps) => {
    return (
        <TouchableOpacity
            style={styles.container}
            {...rest}
        >
            {
                iconComponent
            }
        </TouchableOpacity>
    )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginBottom: 5
    }
})