import React,{ useState } from 'react';
import { Title, Header, ContainerImage, Images, ImageDoctor, Body } from '../Start/styles';
import { Image, ScrollView, TouchableOpacity } from 'react-native';
import Input from '../../Components/Input/Input';
import RectangularButton from '../../Components/Button/Button';
import ErrorMessage from '../../Components/ErrorMessage/TextError';
import { Container, BodyContainer } from './styles';

//importando imgens
import Box from '../../global/Image/Box.png';
import Doctor from '../../global/Image/Doctor.png';
import Plus from '../../global/Image/Plus.png';
import LogoIcon from '../../global/Image/Logo.png';

export function Login(){
    const [user, setUser]= useState('');
    const [key, setKey] = useState('');
    const [invalidUser, setInvalidUser] = useState(false);

    return(
        <Container>
           <Header>
                <Title>BoxDoctor</Title>
            </Header>
            <Body>
                <ContainerImage>
                    <Images source={Box}/>
                    <Images source={Plus}/>
                </ContainerImage>
                <ImageDoctor source={Doctor}/>
            </Body>
            <BodyContainer>
                <Image source={LogoIcon} 
                    style={{width: 150,height:150, resizeMode:'contain'}} 
                />
                <ScrollView style={{width:'100%', height: '100%'}}>
                    <Input 
                        name= 'Email' 
                        icon= 'mail'
                        onChangeText={(value: string) => setUser(value)}
                        value={user} 
                    />
                    <Input 
                        name='Senha' 
                        icon='unlock'
                        onChangeText={(value: string) => setKey(value)}
                        value={key} 
                    />
                    { invalidUser &&
                        <TouchableOpacity onPress={()=>{console.log('esqueci minha senha')}}>
                            <ErrorMessage>Esqueceu sua senha?</ErrorMessage>
                        </TouchableOpacity>
                    }
                    <RectangularButton 
                        IconName='facebook-square'
                        ColorText = {'#FFF'}
                        ColorButton = {'#3B5998'}
                        handleFunction = {()=>{console.log('clicou em entrar com facebook')}}
                    >
                        Entrar com Faceboock
                    </RectangularButton>
                    <RectangularButton 
                        IconName='google-plus-square'
                        ColorText = {'#FFF'}
                        ColorButton = {'#DB4A39'}
                        handleFunction = {()=>{console.log('clicou em entrar com o Google')}}
                    >
                        Entrar com Google
                    </RectangularButton>
                    <RectangularButton 
                        ColorText = {'#FFF'}
                        ColorButton = {'#49E1BB'}
                        handleFunction = {()=>{console.log('Jogando longe')}}
                    >
                       {user.length > 0 ? 'Entrar' : 'Criar nova conta'} 
                    </RectangularButton>
                </ScrollView>
            </BodyContainer>
        </Container>
    )
}