import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/themes';

import { Start } from '../Pages/Start';
import { Login } from '../Pages/Login';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{ cardStyle: { backgroundColor: theme.colors.background }}}
        >
            <Screen name="Start" component={Start} />
            <Screen name="Login" component={Login} />
        </Navigator>
    )
}
