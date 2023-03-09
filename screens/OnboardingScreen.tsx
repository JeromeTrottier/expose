import { StyleSheet, Image } from 'react-native'
import React, { useRef } from 'react'
import { OnboardingScreenProps } from '../types'

import Onboarding from 'react-native-onboarding-swiper';
import Colors from '../constants/Colors';
import InteractionButton from '../components/InteractionButton';
import PostInteractionButton from '../components/posts/PostInteractionButton';
import { Icon } from '@rneui/themed';
import { PureNativeButton } from 'react-native-gesture-handler/lib/typescript/components/GestureButtons';

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {

    const onboardingRef = useRef<Onboarding>(null);


  return (
    <Onboarding
        ref={onboardingRef}
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        DoneButtonComponent={() => 
            <PostInteractionButton
                iconComponent={
                    <Icon 
                        name='done'
                    />
                }
                onPress={() => navigation.navigate("Login")}
            />
        }
        SkipButtonComponent={() => 
            <InteractionButton 
                label='Passer' 
                onPress={() => navigation.navigate("Login")}
                color={Colors.light.pink}
            />
        }
        NextButtonComponent={() => 
            <InteractionButton 
                label='Suivant' 
                onPress={() => onboardingRef.current?.goNext()}
                color={Colors.light.tint}
            />
        }
        titleStyles={{fontWeight: 'bold'}}
        subTitleStyles={{fontWeight: '700'}}
        bottomBarHighlight={false}
        transitionAnimationDuration={400}
        pages={[
            {
                backgroundColor: Colors.light.tint,
                image: <Image source={require('../assets/onboarding1.png')}/>,
                title: 'Bienvenue sur Expose!',
                subtitle: "L'application où vous pouvez mettre en valeur ou taquiner vos amis"
            },
            {
                backgroundColor: Colors.light.background,
                image: <Image source={require('../assets/onboarding2.png')}/>,
                title: 'Avertissement!',
                subtitle: 'Aucune intimidation ou images innapropriés seront acceptés'
            },
            {
                backgroundColor: Colors.light.background,
                image: <Image source={require('../assets/onboarding1.png')}/>,
                title: 'Bon exposage!',
                subtitle: ''
            },
        ]}
    />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})