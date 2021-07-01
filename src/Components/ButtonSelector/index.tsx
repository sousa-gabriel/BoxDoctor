import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/themes';

import Capsula from '../../global/Image/Pill.png';
import Tablete from '../../global/Image/Tablet.png';

interface Props extends TouchableOpacityProps {
    color: string;
    title: string;
    icon?: boolean;
}

export function ButtonSelector({ color, title, icon, ...rest }: Props) {
    return (
        <TouchableOpacity 
            style={[styles.container, { backgroundColor: color }]} 
            {...rest} 
            activeOpacity={0.7} 
        >
            <Image source={title === 'capsula' ? Capsula : Tablete} />
            <Text style={styles.title}>
                {title}
            </Text>
            {icon &&
                <FontAwesome
                    name='angle-down'
                    size={25}
                    style={styles.icon}
                    color={theme.colors.input}
                />
            }

        </TouchableOpacity>
    );
}