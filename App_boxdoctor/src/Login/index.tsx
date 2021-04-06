import React from 'react';
import {
    Container,
    Title,
    Imagem,
} from './styles';
import Logo from '../Img/Logo.png';

const Login: React.FC = () =>{
    return (
        <Container>
            <Title>BoxDoctor</Title>
            <Imagem source={Logo}/>
        </Container>
    );
}
export default Login;