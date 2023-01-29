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
        width: 50,
        height: 50,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#aaa'
    }
});