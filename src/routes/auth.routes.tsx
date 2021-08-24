import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/themes';

// Auth 
import { Start } from '../Pages/Start';
import { Login } from '../Pages/Login';
import { TabBarRoutes } from './tabBar.routes';
// import { ItemsDetails } from '../Pages/ItemsDetails';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{ cardStyle: { backgroundColor: theme.colors.background }}}
        >
            <Screen name="Start" component={Start} />
            <Screen name="Login" component={Login} />
            <Screen name="TabBarRoutes" component={TabBarRoutes} />
            {/* <Screen name="ItemsDetails" component={ItemsDetails} /> */}
        </Navigator>
    )
}
