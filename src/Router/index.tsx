import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PublicRouter from './PublicRouter'
import AuthRouter from './AuthRouter'

const { Navigator, Screen } = createStackNavigator()

const Router = (): ReactElement => {
  return (
    <Navigator headerMode="none">
      <Screen name="PublicRouter" component={PublicRouter} />
      <Screen name="AuthRouter" component={AuthRouter} />
    </Navigator>
  )
}

export default Router
