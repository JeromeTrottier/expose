//React
import { useState, useEffect } from 'react';

//Storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useFirstLaunch() {
    const [isFirstLaunch, setIsFirstLaunch] = useState<null | boolean>(null);

    useEffect(() => {
      AsyncStorage.getItem('isAlreadyLaunched').then(value =>{
        if (value === null) {
          AsyncStorage.setItem('isAlreadyLaunched', 'true');
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } ).catch((error) => {
        console.error(error);
      })
    },[]);

    return isFirstLaunch;
}
