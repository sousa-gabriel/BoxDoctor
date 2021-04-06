import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../Login';
const Navegation = createStackNavigator();

const NavigationRoutes: React.FC = () =>(
    <Navegation.Navigator headerMode='none'  >
        <Navegation.Screen name="login" component={Login}/>
    </Navegation.Navigator>
);
export default NavigationRoutes;