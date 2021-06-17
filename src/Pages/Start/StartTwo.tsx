import React from 'react';
import {
    BlueHeader,
    Title,
    Body,
    ContainerImage,
    Images,
    ImageDoctor,
    Greetings,
    Welcone,
    ButtonNext,
    TextButtonNext,
} from './styles';
import Box from '../../global/Image/Box.png';
import Doctor from '../../global/Image/Doctor.png';
import Plus from '../../global/Image/Plus.png';

export function StartTwo(){
    return(
        <>
            <BlueHeader>
                <Title>BoxDoctor</Title>
            </BlueHeader>
            <Body>
                <ContainerImage>
                    <Images source={Box}/>
                    <Images source={Plus}/>
                </ContainerImage>
                <Greetings 
                style={{
                    shadowColor: '#000',
                    shadowOpacity: 0.5,
                    shadowOffset: { width: 5, height: 2},
                    shadowRadius: 5,
                    elevation: 10,
                }}>
                    <Welcone>{`Bem vindo ${'\n'} ao ${'\n'} BoxDoctor`}</Welcone>
                    <ButtonNext>
                        <TextButtonNext>Iniciar</TextButtonNext>
                    </ButtonNext>
                </Greetings>
                <ImageDoctor source={Doctor}/>
            </Body>
        </>
    )
} 
