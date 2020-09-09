import React, { ReactElement } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as Page from '../pages'

const { Navigator, Screen } = createStackNavigator()

const Router = (): ReactElement => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none">
        <Screen name="Join" component={Page.Join} />
        <Screen name="Login" component={Page.Login} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
