import React, {useState} from 'react';
import TextError from '../../../components/ErrorMessage';
import RectangularButton from '../../../components/RectangularButton';
import ButtonText from '../../../components/ButtonText';
import Modal from 'react-native-modal';
import {Imagens} from '../../../Constants';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Title,
  Imagem,
  ContainerDate,
  ContainerImageHeader,
  ImageHeader,
  ImageHeaderFinish,
  ContainerModal,
  TitleModal,
} from './styles';
import Input from '../../../components/InputComponent/Input';

const Login: React.FC = () => {
  const navigation = useNavigation();
  const [stage, setStage] = useState('start');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [emailOrCpfValid, setemailOrCpfValid] = useState(false);
  const [modalNewNews, setModalNewNews] = useState(false);

  function handleState() {
    cpf === '1234' ? setemailOrCpfValid(true) : setemailOrCpfValid(false);
    setStage('Next');
  }
  function handleImageHeader() {
    if (stage === 'Finish') {
      return (
        <>
          <ContainerImageHeader>
            <ImageHeader source={Imagens.Box} resizeMode="contain" />
            <ImageHeader
              source={Imagens.Plus}
              style={{marginLeft: -120}}
              resizeMode="contain"
            />
          </ContainerImageHeader>
        </>
      );
    } else {
      return <ImageHeaderFinish source={Imagens.Logo} resizeMode="contain" />;
    }
  }
  function ValidateLoginOk() {
    return (
      <>
        <Input
          name="Digite sua senha"
          icon="lock"
          onChangeText={(value: string) => setSenha(value)}
          value={senha}
        />
        <RectangularButton
          ColorText={'#FFF'}
          ColorButton={'#49E1BB'}
          handleFunction={ValidateSenha}>
          Entrar
        </RectangularButton>
      </>
    );
  }
  function ValidateLoginNok() {
    return (
      <>
        <TextError>e-mail / cpf invalida</TextError>
        <ButtonText
          ColorText={'#2377f7'}
          IconName={'check-circle'}
          DateButton={'Próximo'}
          handleFunction={handleState}
        />
        <RectangularButton
          IconName={'user-plus'}
          ColorText={'#49E1BB'}
          ColorButton={'#FFF'}
          handleFunction={() => navigation.navigate('newUser')}>
          Novo usuário
        </RectangularButton>
      </>
    );
  }
  function ValidateSenha() {
    if (senha === '1234') {
      setStage('Finish');
      setTimeout(function () {
        navigation.navigate('dashBoard');
      }, 500);
    } else {
      setStage('senhaInvalid');
    }
  }
  function ValidateSenhaNOK() {
    return (
      <>
        <TextError>Senha invalida</TextError>
        <ButtonText
          ColorText={'#fd8c0a'}
          IconName={'alert-circle'}
          DateButton={'esqueceu sua senha'}
          handleFunction={handleForgotPassword}
        />
      </>
    );
  }
  const handleForgotPassword = () => {
    setModalNewNews(!modalNewNews);
  };
  function ValidateModal() {
    //acrescentar validação do email
    Alert.alert('Enviamos uma nova senha para seu e-mail!!');
    handleForgotPassword();
  }

  return (
    <Container>
      <Modal
        isVisible={modalNewNews}
        hasBackdrop={true}
        animationInTiming={100}
        animationOutTiming={100}
        onBackdropPress={handleForgotPassword}>
        <ContainerModal>
          <TitleModal>Confirme seus dados e clique em enviar</TitleModal>
          <Input
            name="E-mail"
            icon="user"
            defaultValue={cpf}
            onChangeText={(value: string) => setCpf(value)}
            value={cpf}
          />
          <RectangularButton
            IconName={'send'}
            ColorText={'#FFF'}
            ColorButton={'#49E1BB'}
            handleFunction={ValidateModal} //arrumar aqui a função chama a tela de criação de login
          >
            Enviar
          </RectangularButton>
        </ContainerModal>
      </Modal>
      <Title>BoxDoctor</Title>
      <Imagem source={Imagens.Doctor} resizeMode="contain" />
      <ContainerDate
        style={{
          shadowOffset: {width: 10, height: 5},
          shadowColor: '#00000055',
          shadowOpacity: 1.0,
        }}>
        {handleImageHeader()}
        <Input
          name="Digite seu login"
          icon="user"
          onChangeText={(value: string) => setCpf(value)}
          value={cpf}
        />
        {!emailOrCpfValid && stage === 'start' ? (
          <ButtonText
            ColorText={'#2377f7'}
            IconName={'check-circle'}
            DateButton={'Próximo'}
            handleFunction={handleState}
          />
        ) : null}
        {stage === 'start'
          ? null
          : emailOrCpfValid
          ? ValidateLoginOk()
          : ValidateLoginNok()}
        {stage === 'senhaInvalid' && ValidateSenhaNOK()}
      </ContainerDate>
    </Container>
  );
};
export default Login;
