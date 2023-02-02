import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import useAuthentification from '../hooks/useAuthentification'
import { User } from 'firebase/auth'
import AppStack from './AppStack'
import { UserContext } from '../contexts/userContext'

const Routes = () => {

  const [user, setUser] = useState<User>();

  const auth = useAuthentification(setUser);
  
  return (
    <NavigationContainer>
      {
        user ?
        <UserContext.Provider value={user}>
          <AppStack />
        </UserContext.Provider>
        :
        <AuthStack />
      }
    </NavigationContainer>
  )
}

export default Routes
