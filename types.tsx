import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Onboarding: undefined,
    Login: undefined
}

export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;