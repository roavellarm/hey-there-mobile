import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Header from '../components/Header'
import ChatList from '../pages/ChatList'
import Profile from '../pages/Profile'

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
          },
        }}
      >
        <Screen name="Chats" component={ChatList} />
        <Screen name="Profile" component={Profile} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
