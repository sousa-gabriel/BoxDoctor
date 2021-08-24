import React from 'react';
import { BackgroundLogin } from '../../Components/BackgroundLogin';
import { useNavigation } from '@react-navigation/native';
import { HeaderLogin } from '../../Components/HeaderLogin';
import {Container, Content, Title, ButtonStart,ButtonStartText  } from './styles';
import { theme } from '../../global/styles/themes';

export function Start() {
    const navigation = useNavigation();
    return (
        <Container >
            <HeaderLogin title="BoxDoctor" />
            <BackgroundLogin />
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
