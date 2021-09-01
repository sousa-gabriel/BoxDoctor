import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/themes';

import { TabBarRoutes } from './tabBar.routes';


const { Navigator, Screen } = createStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{ cardStyle: { backgroundColor: theme.colors.background }}}
        >
            <Screen name="TabBarRoutes" component={TabBarRoutes} />
        </Navigator>
    )
}
