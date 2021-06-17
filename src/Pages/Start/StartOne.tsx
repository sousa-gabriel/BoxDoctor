import React from 'react';
import {
    Header,
    Logo,
    Title,
} from './styles';
import LogoIcon from '../../global/Image/Logo.png';

export function StartOne(){
    return(
        <>
            <Header>
                <Title>BoxDoctor</Title>
            </Header>
            <Logo source={LogoIcon}/>
        </>
    )
} 
