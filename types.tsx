import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList = {
    Onboarding: undefined,
    Login: undefined,
    SignUp: undefined,
}

export type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

export type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;