import React, { useCallback, useState } from 'react';
import RectangularButton from '../../components/RectangularButton';
import { Imagens } from '../../Constants';
import { Container, Title, ImagemBoy, ImagemGirl, ContainerDate,TitleDate, ContainerImput, Input,ContainerGoogle, TextGoogle,TextFacebook, ContainerFacebook } from './styles'
import Icon from 'react-native-vector-icons/Feather';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const NewUser: React.FC = () => {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false);
    const [name, setName] = useState('');
    const [cpf, setCpf] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');


    const handleInputFocus = useCallback(() => {
        setIsFocused(true);
    }, []);

    const handleInputBlur = useCallback(() => {
        setIsFocused(false);
    }, []);

    return (
        <Container>
            <Title>Novo Usuário</Title>
            <ImagemGirl source={Imagens.Boy} resizeMode='contain' />
            <ImagemBoy source={Imagens.Girl} resizeMode='contain' />
            <ContainerDate style={{ shadowOffset: { width: 10, height: 5 }, shadowColor: '#00000055', shadowOpacity: 1.0 }}>
                <ScrollView>
                <TitleDate >Cadastro de usuário:</TitleDate>
                <ContainerImput style={isFocused ? { backgroundColor: '#fff', borderColor: '#5BD2FF' } : { backgroundColor: '#fff', borderColor: '#707070' }}>
                    <Icon name='user-plus' size={20} style={isFocused ? { color: '#5BD2FF' } : { color: '#707070' }} />
                    <Input
                        placeholder={'Digite seu nome'}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={(value: string) => setName(value)}
                        value={name}
                    />
                </ContainerImput>
                <ContainerImput style={isFocused ? { backgroundColor: '#fff', borderColor: '#5BD2FF' } : { backgroundColor: '#fff', borderColor: '#707070' }}>
                    <Icon name='user' size={20} style={isFocused ? { color: '#5BD2FF' } : { color: '#707070' }} />
                    <Input
                        placeholder={'Digite seu cpf'}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={(value: string) => setCpf(value)}
                        value={cpf}
                    />
                </ContainerImput>
                <ContainerImput style={isFocused ? { backgroundColor: '#fff', borderColor: '#5BD2FF' } : { backgroundColor: '#fff', borderColor: '#707070' }}>
                    <Icon name='mail' size={20} style={isFocused ? { color: '#5BD2FF' } : { color: '#707070' }} />
                    <Input
                        placeholder={'Digite seu e-mail'}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={(value: string) => setEmail(value)}
                        value={email}
                    />
                </ContainerImput>
                <ContainerImput style={isFocused ? { backgroundColor: '#fff', borderColor: '#5BD2FF' } : { backgroundColor: '#fff', borderColor: '#707070' }}>
                    <Icon name='lock' size={20} style={isFocused ? { color: '#5BD2FF' } : { color: '#707070' }} />
                    <Input
                        placeholder={'Digite sua senha'}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={(value: string) => setSenha(value)}
                        value={senha}
                    />
                </ContainerImput>
                <ContainerImput style={isFocused ? { backgroundColor: '#fff', borderColor: '#5BD2FF' } : { backgroundColor: '#fff', borderColor: '#707070' }}>
                    <Icon name='lock' size={20} style={isFocused ? { color: '#5BD2FF' } : { color: '#707070' }} />
                    <Input
                        placeholder={'Confirme sua senha'}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={(value: string) => setConfirmarSenha(value)}
                        value={confirmarSenha}
                    />
                </ContainerImput>
                <ContainerFacebook >
                    <Icon name='facebook' size={20} color={'#FFF'}  />
                    <TextFacebook >Entrar com o facebook</TextFacebook>
                </ContainerFacebook>
                <ContainerGoogle >
                    <Image source={Imagens.Google} style={{width:20, height: 20}} resizeMode='contain'/>
                    <TextGoogle >Entrar com o google</TextGoogle>
                </ContainerGoogle>
                </ScrollView>
            </ContainerDate>

            <RectangularButton
                IconName={'send'}
                ColorText={'#FFF'}
                ColorButton={'#49E1BB'}
                handleFunction={() => navigation.navigate('login')}
            >
                Criar usuário
                </RectangularButton>
        </Container>
    );
}
export default NewUser;