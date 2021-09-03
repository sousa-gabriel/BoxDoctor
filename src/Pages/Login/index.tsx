import React from 'react';
import { LoginBackground } from '../../Components/LoginBackground';
import { LoginContent } from '../../Components/LoginContent';
import { LoginHeader } from '../../Components/LoginHeader';
import { Container } from './styles';

export function Login() {
    return (
        <Container >
            <LoginHeader title='BoxDoctor' />
            <LoginBackground />
            <LoginContent />                    
        </Container>
    )
}