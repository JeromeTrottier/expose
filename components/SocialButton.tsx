import { StyleSheet, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { windowHeight, windowWidth } from '../utils/Dimensions'

type SocialButtonProps = {
    iconComponent: React.ReactNode;
    color?: string;
}

const SocialButton = ({iconComponent, color, ...rest}: SocialButtonProps & TouchableOpacityProps) => {
  return (
    <TouchableOpacity style={[styles.buttonContainer, {backgroundColor: color}]} {...rest}>
        <View>
            { iconComponent }
        </View>
    </TouchableOpacity>
  )
}

export default SocialButton

const styles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        padding: 10,
        width: windowWidth - 100,
        height: windowHeight / 11,
        borderColor: 'black',
        borderWidth: 2,
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 4},
        shadowOpacity: 1,
        shadowRadius: 0
    }
});