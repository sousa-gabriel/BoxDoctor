import React from 'react';
import { BackgroundLogin } from '../../Components/BackgroundLogin';
import { ContentLogin } from '../../Components/ContentLogin';
import { HeaderLogin } from '../../Components/HeaderLogin';
import { Container } from './styles';

export function Login() {
    return (
        <Container >
            <HeaderLogin title='BoxDoctor' />
            <BackgroundLogin />
            <ContentLogin />                    
        </Container>
    )
}