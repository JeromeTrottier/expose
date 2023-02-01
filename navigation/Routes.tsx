import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import useAuthentification from '../hooks/useAuthentification'
import { User } from 'firebase/auth'
import AppStack from './AppStack'

const Routes = () => {

  const [user, setUser] = useState<User>();

  const auth = useAuthentification(setUser);
  
  return (
    <NavigationContainer>
      {
        user ?
        <AppStack />
        :
        <AuthStack />
      }
        
    </NavigationContainer>
  )
}

export default Routes
