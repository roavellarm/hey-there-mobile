import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ChatList from '../pages/ChatList'

const { Navigator, Screen } = createStackNavigator()

const Router: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Chat List" component={ChatList} />
      </Navigator>
    </NavigationContainer>
  )
}

export default Router
