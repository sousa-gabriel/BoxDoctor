import React from 'react';
import { Container, Content } from './styles';
import { Button } from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';


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
                    icon='facebook'
                    title='Entrar com o Facebook'
                    colorIcon='#FFF'
                    onPress={() => { navigation.navigate('TabBarRoutes') }}
                />
                <Button
                    color='#3d8ff2'
                    icon='google'
                    title='Entrar com o Google'
                    colorIcon='#FFF'
                    colorText='#FFF'
                    onPress={() => { navigation.navigate('TabBarRoutes') }}
                />
                {
                    Platform.OS === 'ios' &&
                    <Button
                        color='#F6F3ED'
                        icon='apple'
                        title='Entrar com a Apple'
                        colorIcon='#8F8F8F'
                        colorText='#8F8F8F'
                        onPress={() => { navigation.navigate('TabBarRoutes') }}
                    />
                }
            </Container>
        </Content>
    )
}
