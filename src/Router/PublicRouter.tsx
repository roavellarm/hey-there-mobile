import React, { ReactElement } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
// import HeaderComponent from '../components/Header'

// import * as Page from '../pages'
import Join from '../pages/Join'
import Login from '../pages/Login'

const { Navigator, Screen } = createStackNavigator()

const PublicRouter = (): ReactElement => {
  return (
    <Navigator>
      <Screen name="Join" component={Join} />
      <Screen name="Login" component={Login} />
    </Navigator>
  )
}

export default PublicRouter
