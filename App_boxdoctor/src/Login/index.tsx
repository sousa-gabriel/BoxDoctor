import React from 'react';
import {
    Container,
    Title,
} from './styles';
import LoginStarted from '../components/Login/Started';
import LoginProgress from '../components/Login/Progress';
const Login: React.FC = () =>{
    return (
        <>
            {/* <LoginStarted /> */}
            <LoginProgress />
            {/* <Container>
                <Title>BoxDoctor</Title>
            </Container> */}
        </>
    );
}
export default Login;