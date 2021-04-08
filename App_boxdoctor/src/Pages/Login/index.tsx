import React from 'react';
import {
    Container,
    Title,
    Imagem,
} from './styles';
import { Imagens } from '../../Constants';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
/*
    Pedir Cpf ou email
    Validar email ou cpf 
        se OK
            campo de senha
        senao
            mostrar erro e mostrar botão de cadastro
            Se clicar
                Entrar na tela de Cadastro
            Senao
    Validar novamente email

    Vaalidar senha
        Se Ok 
            Entrar na Dashboard
        Senao
            Mostrar erro e botão esquecia a senha
*/



const Login: React.FC = () => {
    return (
        <Container>
            <Title>Teste</Title>
            {/* <Imagem source={Imagens.Doctor} resizeMode='contain'/> */}
            <View style={{justifyContent: 'center', alignItems: 'center', width: '90%', backgroundColor:'#c5d8df', height: '50%', shadowOffset:{width: 10,height: 5},shadowColor: '#00000055',shadowOpacity: 1.0}}>
                <Icon name='mail' size={20} color="#666360"/>
                <TextInput
                    style={{ borderWidth: 1, height: 60, width: 250 }}
                />                
                <Text style={{alignItems:'flex-start', width: 250, marginTop: 5, color:'red'}}>e-mail / cpf invalida</Text>
                <TextInput
                    style={{ borderWidth: 1, height: 60, width: 250, marginTop: '10%' }}
                />
                <Text style={{alignItems:'flex-start', width: 250, marginTop: 5, color:'red'}}>senha invalida</Text>
            </View>
        </Container>
    );
}
export default Login;