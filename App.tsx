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
import Router from './src/Router'

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
    <>
      <Router />
      <StatusBar style="light" />
    </>
  )
}

export default App
