import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { RootParamList } from '../types'
import { StackNavigationProp } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from '@rneui/themed';

type NavigationProps = StackNavigationProp<RootParamList>;

const CreatePostButton = () => {

    const nav = useNavigation<NavigationProps>()

  return (
    <TouchableOpacity
        onPress={() => nav.navigate('Modal', {authorID: undefined})}
        style={styles.container}
    >
        <Icon
            name='pluscircleo'
            type='ant-design'
        />
    </TouchableOpacity>
  )
}

export default CreatePostButton

const styles = StyleSheet.create({
    container: {
        marginRight: 10,
        marginBottom: 5
    }
})