import React from 'react';
import { styles } from './styles';
import { TouchableOpacity, TouchableOpacityProps, Text, Image, View } from 'react-native';
import { theme } from '../../global/styles/themes';
import Capsula from '../../global/Image/Pill.png';
import Tablete from '../../global/Image/Tablet.png';

interface Props extends TouchableOpacityProps {
    hours: string;
    title: string;
    amountMedicine: string;
    icon: string;
    status: string;
}

export function Itens({ hours, title, amountMedicine, icon, status }: Props) {

    function StatusSelector(status: string) {
        switch (status) {
            case 'success':
                return theme.colors.sucess
            case 'pending':
                return theme.colors.primary
            case 'missing':
                return theme.colors.Loading
            case 'inative':
                return theme.colors.input
            default:
                break;
        }
    }
    return (
        <TouchableOpacity
            style={[styles.container, { borderBottomColor: StatusSelector(status) }]}
            activeOpacity={0.7}
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
            <Image source={icon === 'capsula' ? Capsula : Tablete} style={styles.icon} />
        </TouchableOpacity>
    )
}