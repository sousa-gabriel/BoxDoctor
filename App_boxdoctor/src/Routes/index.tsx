import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Start from '../Pages/LoginPages/Start';
import Login from '../Pages/LoginPages/Login';
import NewUser from '../Pages/LoginPages/NewUser';
import DashBoard from '../Pages/DashBoard';

const Navegation = createStackNavigator();

const NavigationRoutes: React.FC = () => (
  <Navegation.Navigator headerMode={'none'}>
    <Navegation.Screen name="start" component={Start} />
    <Navegation.Screen name="login" component={Login} />
    <Navegation.Screen name="newUser" component={NewUser} />
    <Navegation.Screen name="dashBoard" component={DashBoard} />
  </Navegation.Navigator>
);
export default NavigationRoutes;
