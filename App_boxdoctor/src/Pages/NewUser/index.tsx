import React, {useState} from 'react';
import RectangularButton from '../../components/RectangularButton';
import {Imagens} from '../../Constants';
import {
  Container,
  Title,
  ImagemBoy,
  ImagemGirl,
  ContainerDate,
  TitleDate,
  ContainerGoogle,
  TextGoogle,
  TextFacebook,
  ContainerFacebook,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Input from '../../components/InputComponent/Input';

const NewUser: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <Container>
      <Title>Novo Usuário</Title>
      <ImagemGirl source={Imagens.Boy} resizeMode="contain" />
      <ImagemBoy source={Imagens.Girl} resizeMode="contain" />
      <ContainerDate
        style={{
          shadowOffset: {width: 10, height: 5},
          shadowColor: '#00000055',
          shadowOpacity: 1.0,
        }}>
        <ScrollView>
          <TitleDate>Cadastro de usuário:</TitleDate>
          <Input
            name="Digite seu nome"
            icon="user-plus"
            onChangeText={(value: string) => setName(value)}
            value={name}
          />
          <Input
            name="Digite seu cpf"
            icon="user"
            onChangeText={(value: string) => setCpf(value)}
            value={cpf}
          />
          <Input
            name="Digite seu e-mail"
            icon="mail"
            onChangeText={(value: string) => setEmail(value)}
            value={email}
          />
          <Input
            name="Digite sua senha"
            icon="lock"
            onChangeText={(value: string) => setSenha(value)}
            value={senha}
          />
          <Input
            name="Confirme sua senha"
            icon="lock"
            onChangeText={(value: string) => setConfirmarSenha(value)}
            value={confirmarSenha}
          />
          <ContainerFacebook>
            <Icon name="facebook" size={20} color={'#FFF'} />
            <TextFacebook>Entrar com o facebook</TextFacebook>
          </ContainerFacebook>
          <ContainerGoogle>
            <Image
              source={Imagens.Google}
              style={{width: 20, height: 20}}
              resizeMode="contain"
            />
            <TextGoogle>Entrar com o google</TextGoogle>
          </ContainerGoogle>
        </ScrollView>
      </ContainerDate>

      <RectangularButton
        IconName={'send'}
        ColorText={'#FFF'}
        ColorButton={'#49E1BB'}
        handleFunction={() => navigation.navigate('login')}>
        Criar usuário
      </RectangularButton>
    </Container>
  );
};
export default NewUser;
