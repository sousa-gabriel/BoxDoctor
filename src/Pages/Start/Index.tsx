import React from 'react';
import { LoginBackground } from '../../Components/LoginBackground';
import { useNavigation } from '@react-navigation/native';
import { LoginHeader } from '../../Components/LoginHeader';
import {Container, Content, Title, ButtonStart,ButtonStartText  } from './styles';
import { theme } from '../../global/styles/themes';

export function Start() {
    const navigation = useNavigation();
    return (
        <Container >
            <LoginHeader title="BoxDoctor" />
            <LoginBackground />
            <Content style={theme.colors.shadow}>
                <Title>
                    Bem vindo!!{'\n'}ao{'\n'}BoxDoctor
                </Title>
                <ButtonStart onPress={() => { navigation.navigate('Login') }}>
                    <ButtonStartText >
                        Iniciar
                    </ButtonStartText>
                </ButtonStart>
            </Content>
        </Container>
    )
}
