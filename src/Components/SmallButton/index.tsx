import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';
import { theme } from '../../global/styles/themes';

interface Props extends TouchableOpacityProps {
    icon: string;
    colorIcon: string;
}

export function SmallButton({  icon, colorIcon, ...rest }: Props) {
    return (
        <Container activeOpacity={0.7} style={theme.colors.shadow} {...rest}>
            {!!icon && <FontAwesome name={icon} size={30} color={colorIcon} />}
        </Container>
    );
}