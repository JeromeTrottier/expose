import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Providers from "./navigation";
import { LogBox } from "react-native";

LogBox.ignoreLogs(["AsyncStorage has been extracted from react-native"]);

export default function App() {
  return (
    <SafeAreaProvider>
       <Providers/>  
    </SafeAreaProvider>
  )
}
