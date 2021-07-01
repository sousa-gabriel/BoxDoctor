import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../global/styles/themes';

//para auth 
import { Start } from '../Pages/Start';
import { Login } from '../Pages/Login';
import { CreateUser } from '../Pages/CreateUser';
import { Home } from '../Pages/Home';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode='none'
            screenOptions={{ cardStyle: { backgroundColor: theme.colors.background }}}
        >
            <Screen name="Start" component={Start} />
            <Screen name="Home" component={Home} />
            <Screen name="Login" component={Login} />
            <Screen name="CreateUser" component={CreateUser} />
        </Navigator>
    )
}