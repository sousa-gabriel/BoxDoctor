import React from 'react';
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
import Doctor from '../../../Img/Medico.png'
import Box from '../../../Img/Box.png';
import Plus from '../../../Img/Mais.png';

const LoginProgress: React.FC = () =>{
    return (
        <Container>
            <Title>BoxDoctor</Title>
            <ContainerImage>
                <ContainerImageRow>
                    <ImagemBox source={Box} resizeMode="contain" />
                    <ImagemPlus source={Plus} />
                </ContainerImageRow>
                <ImagemDoctor source={Doctor} resizeMode="contain" />
                <ContainerWelcone style={{ shadowOffset:{width: 10,height: 5},shadowColor: '#00000055',shadowOpacity: 1.0}}>
                    <WelconeTitle >Bem vindo!!</WelconeTitle> 
                    <WelconeTitle >ao BoxDoctor!!!</WelconeTitle>
                    <WelconeButton >
                        <WelconeButtonTitle >Entrar</WelconeButtonTitle>
                    </WelconeButton>
                </ContainerWelcone>
            </ContainerImage>
        </Container>
    );
}
export default LoginProgress;