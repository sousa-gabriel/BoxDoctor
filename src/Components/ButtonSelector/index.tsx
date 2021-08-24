import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { Container, Icon, Title } from './styles';
import { theme } from '../../global/styles/themes';

import Capsula from '../../global/Image/Pill.png';
import Tablete from '../../global/Image/Tablet.png';

interface Props extends TouchableOpacityProps {
    title: string;
    icon?: boolean;
}

export function ButtonSelector({ title, icon, ...rest }: Props) {
    return (
        <Container  {...rest} activeOpacity={0.7} style={theme.colors.shadow} >
            <Icon source={title === 'capsula' ? Capsula : Tablete} />
            <Title> {title} </Title>
            { icon && <FontAwesome name='angle-down' size={25} color={theme.colors.input} /> }
        </Container>
    );
}