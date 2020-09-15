import React, { ReactElement } from 'react'
// import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderComponent from '../components/Header'
//  import * as Page from '../pages'
import Chats from '../pages/ChatList'
import Profile from '../pages/Profile'
import ChatRoom from '../pages/ChatRoom'

const { Navigator, Screen } = createStackNavigator()

const Router = (): ReactElement => {
  return (
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
      <Screen name="Chats" component={Chats} />
      <Screen name="Profile" component={Profile} />
      <Screen name="Chat Room" component={ChatRoom} />
    </Navigator>
  )
}

export default Router
