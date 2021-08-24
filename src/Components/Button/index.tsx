import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { ButtonContainer, TitleButton } from './styles';
import { theme } from '../../global/styles/themes';

interface Props extends TouchableOpacityProps {
    color: string;
    title: string;
    icon?: string;
    colorIcon?: string;
    colorText?: string;
}

export function Button({ color, icon , title, colorIcon, colorText, ...rest }: Props) {
    return (
        <ButtonContainer style={theme.colors.shadow} activeOpacity={0.7} color={color} {...rest} >
            {
                !!icon &&
                <FontAwesome name={icon} size={25} color={colorIcon} style={{ marginRight: 5 }} />
            }
            <TitleButton color={colorText}>
                {title}
            </TitleButton>
        </ButtonContainer>
    );
}