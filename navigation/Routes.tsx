import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import useAuthentification from '../hooks/useAuthentification'
import AppStack from './AppStack'
import { UserContext } from '../contexts/userContext'
import { DocumentData } from 'firebase/firestore'
import { DefaultTheme } from '@react-navigation/native';
import Colors from '../constants/Colors'

const Routes = () => {

  const [userData, setUserData] = useState<DocumentData | undefined>();

  const auth = useAuthentification(setUserData);

  console.log(userData);
  

  const ExposeTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.light.background
    }
  }
  
  return (
    <NavigationContainer
      theme={ExposeTheme}
    >
      {
        userData ?
        <UserContext.Provider value={userData}>
          <AppStack />
        </UserContext.Provider>
        :
        <AuthStack />
      }
    </NavigationContainer>
  )
}

export default Routes
