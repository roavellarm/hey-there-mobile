import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import * as Page from '../pages'

const { Navigator, Screen } = createStackNavigator()

const PublicRouter = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Join" component={Page.Join} />
      <Screen name="Login" component={Page.Login} />
    </Navigator>
  )
}

export default PublicRouter
