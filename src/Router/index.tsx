import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/Header'
import ChatList from '../pages/ChatList'
import Profile from '../pages/Profile'
import Join from '../pages/Join'
import Login from '../pages/Login'
import ChatRoom from '../pages/ChatRoom'

const { Navigator, Screen } = createStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitle: () => <Header />,
          headerStyle: {
            backgroundColor: '#574b5d',
            height: 80,
            borderBottomWidth: 0,
          },
        }}
      >
        <Screen name="Chat Room" component={ChatRoom} />
        <Screen name="Login" component={Login} />
        <Screen name="Join" component={Join} />
        <Screen name="Chats" component={ChatList} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
