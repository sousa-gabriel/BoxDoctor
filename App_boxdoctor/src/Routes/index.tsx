import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Start from '../Pages/Start';
import Login from '../Pages/Login';
const Navegation = createStackNavigator();

const NavigationRoutes: React.FC = () =>(
    <Navegation.Navigator headerMode='none'  >
        <Navegation.Screen name="start" component={Start}/>
        <Navegation.Screen name="login" component={Login}/>
    </Navegation.Navigator>
);
export default NavigationRoutes;