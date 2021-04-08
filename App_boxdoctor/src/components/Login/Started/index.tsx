import React from 'react';
import {
    Container,
    Title,
    Imagem,
} from './styles';
import {Imagens} from '../../../Constants';

const LoginStarted: React.FC = () => {
    return (
        <Container>
            <Title>BoxDoctor</Title>
            <Imagem source={Imagens.Logo} resizeMode='contain'/>
        </Container>
    );
}
export default LoginStarted;