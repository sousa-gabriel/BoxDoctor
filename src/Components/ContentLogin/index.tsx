import React, {useState} from 'react';
import { Container, Content } from './styles';
import { Button } from '../../Components/Button';
import { useNavigation } from '@react-navigation/native';
import { Platform, Alert, ActivityIndicator } from 'react-native';
import { useAuth } from '../../hooks/Auth';
import { theme } from '../../global/styles/themes';


export function ContentLogin() {
    const [isLoading, setIsLoading] = useState(false);
    const {signInWithGoogle, signInWithApple } = useAuth()
    const navigation = useNavigation();

    async function handlesingInWithGoogle(){
        try {
            setIsLoading(true);
            return await signInWithGoogle();
        } catch (error) {
            console.log(error)
            Alert.alert('Não foi possivel conectar-se a sua conta Google')
            setIsLoading(false);
        }
    }
    
    async function handlesigInWithApple(){
        try {
            setIsLoading(true);
            return await signInWithApple();
        } catch (error) {
            console.log(error);
            Alert.alert('Não foi possivel conectar-se a sua conta Apple');
            setIsLoading(false);
        }
    }

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
                    onPress={handlesingInWithGoogle}
                />
                {
                    Platform.OS === 'ios' &&
                    <Button
                        color='#F6F3ED'
                        icon='apple'
                        title='Entrar com a Apple'
                        colorIcon='#8F8F8F'
                        colorText='#8F8F8F'
                        onPress={handlesigInWithApple}
                    />
                }
            </Container>
            {
                    isLoading && <ActivityIndicator size='large' color={theme.colors.primary}/>
                }
        </Content>
    )
}
