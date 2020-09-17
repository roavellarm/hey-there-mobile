import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { AppLoading } from 'expo'
import {
  Lato_100Thin,
  Lato_300Light,
  Lato_400Regular,
  Lato_700Bold,
  Lato_900Black,
  useFonts,
} from '@expo-google-fonts/lato'
import { NavigationContainer } from '@react-navigation/native'
import Router from './src/Router'
import { AuthProvider } from './src/contexts/auth'

const App: React.FC = () => {
  const [fontsLoaded] = useFonts({
    Lato_100Thin,
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
    Lato_900Black,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <StatusBar style="light" />
    </AuthProvider>
  )
}

export default App
