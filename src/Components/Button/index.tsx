import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './styles';
import { theme } from '../../global/styles/themes';

interface Props extends TouchableOpacityProps {
    color: string;
    title: string;
    icon?: string;
    colorIcon?: string;
    colorText?: string;
}

export function Button({ color, icon, title, colorIcon, colorText, ...rest }: Props) {
    return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={[styles.container, {backgroundColor:color}]} 
            {...rest} 
        >
            {!!icon && <FontAwesome name={icon} size={25} color={colorIcon} style={styles.icon} />}
            <Text style={[styles.title, {color: colorText ? colorText : theme.colors.button}]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}