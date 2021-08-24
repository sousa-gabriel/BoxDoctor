import React from 'react';
import { Container, Content } from './styles';
import { Button } from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/themes';


export function ContentLogin() {
    const navigation = useNavigation();

    return (
        <Content
            contentContainerStyle={{ paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
        >
            <Container >
                <Button
                    color='#3B5998'
                    icon='facebook-square'
                    title='Entrar com o Facebook'
                    colorIcon='#FFF'
                    onPress={() => { navigation.navigate('Home') }}
                />
                <Button
                    color='#E9500E'
                    icon='google-plus-square'
                    title='Entrar com o Google'
                    colorIcon='#FFF'
                    onPress={() => { navigation.navigate('Home') }}
                />
            </Container>
        </Content>
    )
}
