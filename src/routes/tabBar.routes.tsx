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
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../global/styles/themes';

const { Navigator, Screen } = createBottomTabNavigator();

export function TabBarRoutes() {
    return (
        <Navigator tabBarOptions={{
            // showLabel: false,
            activeTintColor: theme.colors.primary,
            inactiveTintColor: theme.colors.input,
            style: {
                paddingTop: Platform.OS === 'ios' ? 10 : 0,
                height: 40,
            },
        }}>
            <Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: (({ focused }) => (
                        <Image
                            source={focused ? onCalendarImg : offCalendarImg}
                            style={{ height: 30, width: 30, resizeMode: 'center' }}
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
                            style={{ height: 30, width: 30, resizeMode: 'center' }}
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
                            style={{ height: 30, width: 30, resizeMode: 'center' }}
                        />
                    ))
                }}
            />
        </Navigator>
    );
}