import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import HeaderComponent from '../components/Header'
import PublicRoutes from './PublicRoutes'
import AuthRouter from './AuthRoutes'
// import Chats from '../pages/ChatList'
// import AuthContext from '../contexts/auth'

const { Navigator, Screen } = createStackNavigator()

const Router = (): ReactElement => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="PublicRouter" component={PublicRoutes} />
        <Screen name="AuthRouter" component={AuthRouter} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
