import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/themes';

interface Props extends TouchableOpacityProps {
    color: string;
    icon: string;
    colorIcon: string;
}

export function SmallButton({ color, icon, colorIcon, ...rest }: Props) {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={[styles.container, {backgroundColor:color}]} 
            {...rest} 
        >
            {!!icon && <FontAwesome name={icon} size={30} color={colorIcon} />}
        </TouchableOpacity>
    );
}