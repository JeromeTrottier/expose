import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type AuthStackParamList = {
    Onboarding: undefined;
    Login: undefined;
    SignUp: undefined;
}

export type OnboardingScreenProps = NativeStackScreenProps<AuthStackParamList, 'Onboarding'>;

export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;

export type RootStackParamList = {
    Home: undefined;
}

export type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;