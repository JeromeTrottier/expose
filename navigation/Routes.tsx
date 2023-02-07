import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import useAuthentification from '../hooks/useAuthentification'
import AppStack from './AppStack'
import { UserContext } from '../contexts/userContext'
import { DocumentData } from 'firebase/firestore'

const Routes = () => {

  const [userData, setUserData] = useState<DocumentData | undefined>();

  const auth = useAuthentification(setUserData);
  
  return (
    <NavigationContainer>
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
