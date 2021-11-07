import React from 'react';
import { Header } from '../../Components/Header';
import { Container } from './styles';
import {Text, TouchableOpacity} from 'react-native';
import { useAuth } from '../../context/Auth';



export function BoxDoctor() { 
    const {user} = useAuth();
      
    return (
        <Container >
            <Header title='Box Doctor' />
            <TouchableOpacity >
                <Text>Created User</Text>
            </TouchableOpacity>

        </Container>
    )
}