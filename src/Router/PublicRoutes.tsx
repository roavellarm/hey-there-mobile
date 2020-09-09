import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Join from '../pages/Join'
import Login from '../pages/Login'

const { Navigator, Screen } = createStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Join" component={Join} />
        <Screen name="Login" component={Login} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
