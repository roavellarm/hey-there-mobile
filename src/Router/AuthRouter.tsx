import React, { ReactElement } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HeaderComponent from '../components/Header'
import * as Page from '../pages'

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
      <Screen name="Chats" component={Page.ChatList} />
      <Screen name="Profile" component={Page.Profile} />
      <Screen name="Chat Room" component={Page.ChatRoom} />
    </Navigator>
  )
}

export default Router
