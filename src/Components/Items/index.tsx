import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, Image, View } from 'react-native';
import { theme } from '../../global/styles/themes';
import Capsula from '../../global/Image/Pill.png';
import Tablete from '../../global/Image/Tablet.png';
import { useState } from 'react';

import { Container, ContentTitle, Hours, Title, SubTitle, Icon, Power, PowerSelector } from './styles';
export interface ItemsProps extends TouchableOpacityProps {
    id?: string;
    hours: string;
    title: string;
    amountMedicine: number;
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
        <Container
            style={{borderBottomColor: StatusSelector(status)}}
            activeOpacity={0.7}
            {...rest}
        >
            <Hours style={{ color: StatusSelector(status) }}>
                {console.log(hours)}
                {hours}
            </Hours>
            <ContentTitle>
                <Title style={{ color: StatusSelector(status) }}>
                    {title}
                </Title>
                <SubTitle style={{ color: StatusSelector(status) }}>
                    {amountMedicine} {icon === 'capsula' ? 'Capsulas' : 'Comprimido'}
                </SubTitle>
            </ContentTitle>
            {
                icon &&
                <Icon 
                    source={icon === 'capsula' ? Capsula : Tablete} 
                    style={{resizeMode: 'contain'}} 
                />
            }
            {
                active &&
                <Power onPress={handleSetStatusActive} style={
                { borderColor: statusActive ? theme.colors.success : theme.colors.borderColor,
                 alignItems: statusActive ? 'flex-end' : 'flex-start'}
                } >
                    <PowerSelector
                        style={
                        { backgroundColor: statusActive 
                            ? theme.colors.success 
                            : theme.colors.borderColor}
                        } />
                </Power>
            }

        </Container >
    )
}