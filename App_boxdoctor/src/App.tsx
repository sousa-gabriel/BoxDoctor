import 'react-native-gesture-handler';
import React from 'react';
import {View, StatusBar} from 'react-native';
import Routes from '../src/Routes';
import {NavigationContainer} from '@react-navigation/native';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </View>
  </>
);

export default App;
