import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, Platform } from 'react-native';

// Screens
import { Dashboard } from '../Pages/Dashboard';
import { Alarm } from '../Pages/Alarm';
import { BoxDoctor } from '../Pages/BoxDoctor';

//  icons
import offCalendarImg from '../global/Image/offCalendar.png';
import onCalendarImg from '../global/Image/onCalendar.png';
import offAlarmImg from '../global/Image/offAlarm.png';
import onAlarmImg from '../global/Image/onAlarm.png';
import offBoxImg from '../global/Image/offBox.png';
import onBoxImg from '../global/Image/onBox.png';
import { theme } from '../global/styles/themes';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabBarRoutes() {
    return (
        <Navigator tabBarOptions={{
            showLabel: false,
            activeTintColor: theme.colors.primary,
            inactiveTintColor: theme.colors.input,
            style: {
                paddingTop: 10,
                height: '5%',
            },
        }}>
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={focused ? onCalendarImg : offCalendarImg}
                            style={{ height: 25, width: 25, resizeMode: 'contain' }}
                        />
                    ))
                }}
            />
            <Screen
                name="Alarm"
                component={Alarm}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={focused ? onAlarmImg : offAlarmImg}
                            style={{ height: 25, width: 25, resizeMode: 'contain' }}
                        />
                    ))
                }}
            />
            <Screen
                name="BoxDoctor"
                component={BoxDoctor}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={focused ? onBoxImg : offBoxImg}
                            style={{ height: 25, width: 25, resizeMode: 'contain' }}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}