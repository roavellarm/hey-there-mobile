import React, { ReactElement, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PublicRouter from './PublicRouter'
import AuthRouter from './AuthRouter'
import AuthContext from '../contexts/auth'

const { Navigator, Screen } = createStackNavigator()

const Router = (): ReactElement => {
  const { signed } = useContext(AuthContext)

  return (
    <Navigator headerMode="none">
      {signed ? (
        <Screen name="AuthRouter" component={AuthRouter} />
      ) : (
        <Screen name="PublicRouter" component={PublicRouter} />
      )}
    </Navigator>
  )
}

export default Router
