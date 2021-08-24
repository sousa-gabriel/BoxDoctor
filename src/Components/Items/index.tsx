import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps, Text, Image, View } from 'react-native';
import { theme } from '../../global/styles/themes';
import Capsula from '../../global/Image/Pill.png';
import Tablete from '../../global/Image/Tablet.png';
import { useState } from 'react';

export interface ItemsProps extends TouchableOpacityProps {
    id?: string;
    hours: string;
    title: string;
    amountMedicine: string;
    status: string;
    icon?: string;
    active?: boolean;
}

export function Items({ hours, title, amountMedicine, icon, status, active, ...rest }: ItemsProps) {
    const [statusActive, SetStatusActive] = useState(false);
    function handleSetStatusActive() {
        SetStatusActive(!statusActive)
    }

    function StatusSelector(status: string) {
        switch (status) {
            case 'success':
                return theme.colors.success
            case 'pending':
                return theme.colors.primary
            case 'missing':
                return theme.colors.Loading
            case 'inactive':
                return theme.colors.input
            default:
                break;
        }
    }
    return (
        <TouchableOpacity
            style={[styles.container, { borderBottomColor: StatusSelector(status) }]}
            activeOpacity={0.7}
            {...rest}
        >
            <Text style={[styles.hours, { color: StatusSelector(status) }]}>
                {hours}
            </Text>
            <View>
                <Text style={[styles.title, { color: StatusSelector(status) }]}>
                    {title}
                </Text>
                <Text style={[styles.subTitle, { color: StatusSelector(status) }]}>
                    {amountMedicine} {icon === 'capsula' ? 'Capsulas' : 'Comprimido'}
                </Text>
            </View>
            {
                icon &&
                <Image source={icon === 'capsula' ? Capsula : Tablete} style={styles.icon} />
            }
            {
                active &&
                <TouchableOpacity onPress={handleSetStatusActive} style={[styles.Power,
                { borderColor: statusActive ? theme.colors.success : theme.colors.borderColor,
                 alignItems: statusActive ? 'flex-end' : 'flex-start'}
                ]} >
                    <View
                        style={[styles.PowerSelector,
                        { backgroundColor: statusActive 
                            ? theme.colors.success 
                            : theme.colors.borderColor}
                        ]} />
                </TouchableOpacity>
            }

        </TouchableOpacity >
    )
}