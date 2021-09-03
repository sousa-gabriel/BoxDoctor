import React from 'react';
import {
    ContainerBox, 
    Box, 
    Plus, 
    ContainerDoctors, 
    Doctors
} from './styles'

import BoxImg from '../../global/Image/Box.png';
import PlusImg from '../../global/Image/Plus.png';
import Doctor from '../../global/Image/Doctor.png';

export function LoginBackground() {
    return (
        <>
            <ContainerBox >
                <Box source={BoxImg} styles={{resizeMode: 'contain'}}/>
                <Plus source={PlusImg} styles={{resizeMode: 'contain'}}/>
            </ContainerBox>
            <ContainerDoctors >
                <Doctors source={Doctor} styles={{resizeMode: 'contain'}}/>
            </ContainerDoctors>
        </>
    );
}