import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Providers from "./navigation";


export default function App() {
  return (
    <SafeAreaProvider>
       <Providers/>  
    </SafeAreaProvider>
  )
}
