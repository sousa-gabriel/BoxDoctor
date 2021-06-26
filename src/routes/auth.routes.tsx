import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//para auth 
import { Start } from '../Pages/Start';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{
                cardStyle: {
                    // backgroundColor: theme.colors.primary
                }
            }}
        >
            <Screen
                name="Start"
                component={Start}
            />
        </Navigator>
    )
}