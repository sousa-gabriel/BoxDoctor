import React from 'react';
import { useFonts } from 'expo-font';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { useAuth } from './src/hooks/Auth';
import { Providers } from './src/hooks';

import { StatusBar } from 'react-native';
import { Router } from './src/routes';
import { Background } from './src/Components/Background';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Rajdhani_500Medium, 
    Rajdhani_700Bold
  });

  const {userStorageLoading} = useAuth();

  if (!fontsLoaded || userStorageLoading) {
    return <AppLoading />
  }

  return (
    <Background>
      <StatusBar backgroundColor='transparent' translucent barStyle='dark-content'/>
      <Providers>
        <Router />
      </Providers>
    </Background>
  )
}
