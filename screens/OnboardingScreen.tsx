import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import { OnboardingScreenProps } from '../types'

import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = ({navigation}: OnboardingScreenProps) => {
  return (
    <Onboarding
        onSkip={() => navigation.navigate("Login")}
        onDone={() => navigation.navigate("Login")}
        nextLabel="Suivant"
        skipLabel="Passer"
        bottomBarHighlight={false}
        transitionAnimationDuration={400}
        pages={[
            {
                backgroundColor: 'pink',
                image: <Image />,
                title: 'Onboarding',
                subtitle: 'Salut'
            },
            {
                backgroundColor: 'blue',
                image: <Image />,
                title: 'Onboarding',
                subtitle: 'Coucou'
            },
            {
                backgroundColor: '#fff',
                image: <Image />,
                title: 'Onboarding',
                subtitle: ' Bonjour'
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