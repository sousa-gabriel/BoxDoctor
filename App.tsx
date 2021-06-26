import React from 'react';
import { useFonts } from 'expo-font';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

import { StatusBar } from 'react-native';
import { Router } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading />
  }
  return (
    <>
      <StatusBar backgroundColor='transparent' translucent barStyle='dark-content'/>
      <Router />
    </>
  )
}
