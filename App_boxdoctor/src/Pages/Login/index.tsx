import React from 'react';
import {
    Container,
    Title,
    Imagem,
} from './styles';
import { Imagens } from '../../Constants';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
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
            <Title>BoxDoctor</Title>
            <Imagem source={Imagens.Doctor} resizeMode='contain'/>
            <View style={{justifyContent: 'center', alignItems: 'center', width: '90%', backgroundColor:'#9ddbf155',borderRadius:10, height: '70%', shadowOffset:{width: 10,height: 5},shadowColor: '#00000055',shadowOpacity: 1.0}}>
                {/* -------------------------------Normal------------------------------- */}
                <Image source={Imagens.Logo} resizeMode="contain" style={{width: 200,height: 150, position:'absolute', top: 20}} />
               
                {/* 
                -------------------------------Email e senha OK-------------------------------
                <View style={{flexDirection: 'row',position:'absolute', top: 20}}>
                    <Image source={Imagens.Box} resizeMode="contain" style={{width: 200,height: 150}} />
                    <Image source={Imagens.Plus} resizeMode="contain" style={{width: 200,height: 150, marginLeft: -80}} />
                </View> */}
                
                <View style={{ borderColor:'#fff',borderRadius: 5, borderBottomColor:'#5BD2FF', borderBottomWidth:3, alignItems: 'center', padding:10, borderWidth: 1, backgroundColor:'#fff', height: 45, width: 250, flexDirection:'row' }}>
                    <Icon name='mail' size={20} color="#666360"/>
                    <TextInput
                        style={{height: '100%', width:'90%', marginLeft: 10}}
                        placeholder='Digite seu e-mail ou CPF'
                    />                
                </View> 
                    {/* -------------------------------Email ou cpf invalidos------------------------------- */}
                    {/* <Text style={{alignItems:'flex-start', width: 250, marginTop: 10, color:'red'}}>e-mail / cpf invalida</Text> 
                    <TouchableOpacity style={{flexDirection: 'row', width: 250, justifyContent: 'flex-start', alignItems: 'center', marginTop:10}}>
                        <Icon name='user' size={20} color="#fff"/>
                        <Text style={{alignItems:'flex-start', width: 250,fontWeight:'bold', color: '#fff',marginLeft: 10}}>Novo usuário</Text> 
                    </TouchableOpacity>  */}
                {/* 
                    -------------------------------Somente apararece se o email estiver correto-------------------------------
                
                <View style={{marginTop:20, borderColor:'#fff',borderRadius: 5, borderBottomColor:'#5BD2FF', borderBottomWidth:3, alignItems: 'center', padding:10, borderWidth: 1, backgroundColor:'#fff', height: 45, width: 250, flexDirection:'row' }}>
                    <Icon name='lock' size={20} color="#666360"/>
                    <TextInput
                        style={{height: '100%', width:'90%', marginLeft: 10}}
                        placeholder='Senha'
                    />                
                </View> 
                
                */}
                {/* 
                    -------------------------------Senha invalida-------------------------------
                    <Text style={{alignItems:'flex-start', width: 250, marginTop: 5, color:'red'}}>Senha invalida</Text> 
                */}
                {/* 
                        -------------------------------Botão quando senha e email Ok-------------------------------
                    <TouchableOpacity style={{width:200, height: 50, backgroundColor: '#49E1B8', position:'absolute', bottom: 50, borderRadius: 10, justifyContent: 'center', alignItems:'center'}}>
                        <Text style={{color:'#fff', fontSize: 20, fontWeight: 'bold'}}>
                            Entrar
                        </Text>
                    </TouchableOpacity> 
                
                */}
            </View>
        </Container>
    );
}
export default Login;