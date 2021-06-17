import React, { useState } from 'react';
import {
    Container,
} from './styles';
import {StartOne} from './StartOne';
import {StartTwo} from './StartTwo';
import {Login} from '../Login/Login';

export function Start(){
    const [teste, setTeste] = useState(1);

    return(
        <Container>
            {
                teste === 0 ?
                 <StartOne /> :
                 <Login/>
                //  <StartTwo />
            }
        </Container>
    )
} 
