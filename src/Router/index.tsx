import React, { ReactElement, useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderComponent from '../components/Header'
import PublicRouter from './PublicRouter'
import AuthRouter from './AuthRouter'
// import Chats from '../pages/ChatList'
import AuthContext from '../contexts/auth'

const { Navigator, Screen } = createStackNavigator()

const Router = (): ReactElement => {
  const { signed } = useContext(AuthContext)

  if (signed) {
    return (
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerTitle: () => <HeaderComponent />,
            headerStyle: {
              backgroundColor: '#574b5d',
              height: 80,
              borderBottomWidth: 0,
            },
          }}
        >
          <Screen name="AuthRouter" component={AuthRouter} />
        </Navigator>
      </NavigationContainer>
    )
  }
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="PublicRouter" component={PublicRouter} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
