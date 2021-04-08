import React from 'react';
import {Imagens} from '../../../Constants';
import { useNavigation } from '@react-navigation/native';
import {
    Container,
    Title,
    ContainerImageRow,
    ImagemBox,
    ImagemPlus,
    ImagemDoctor,
    ContainerImage,
    ContainerWelcone,
    WelconeTitle,
    WelconeButton,
    WelconeButtonTitle
} from './styles';

const LoginProgress: React.FC = () =>{
    const navigation = useNavigation();
    return (
        <Container>
            <Title>BoxDoctor</Title>
            <ContainerImage>
                <ContainerImageRow>
                    <ImagemBox source={Imagens.Box} resizeMode="contain" />
                    <ImagemPlus source={Imagens.Plus} />
                </ContainerImageRow>
                <ImagemDoctor source={Imagens.Doctor} resizeMode="contain" />
                <ContainerWelcone style={{ shadowOffset:{width: 10,height: 5},shadowColor: '#00000055',shadowOpacity: 1.0}}>
                    <WelconeTitle >Bem vindo!!</WelconeTitle> 
                    <WelconeTitle >ao BoxDoctor!!!</WelconeTitle>
                    <WelconeButton onPress={()=>{navigation.navigate('login')}} >
                        <WelconeButtonTitle >Entrar</WelconeButtonTitle>
                    </WelconeButton>
                </ContainerWelcone>
            </ContainerImage>
        </Container>
    );
}
export default LoginProgress;