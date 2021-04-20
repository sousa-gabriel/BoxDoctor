/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Container, FooterContainer, Title, Item} from './styles';
import {Imagens} from '../../Constants';
import {Image} from 'react-native';

const DashBoard: React.FC = () => {
  const [home, sethome] = useState(true);
  const [agenda, setagenda] = useState(false);
  const [boxDoctor, setboxDoctor] = useState(false);

  return (
    <Container>
      <FooterContainer>
        <Item
          onPress={() => {
            setboxDoctor(false), setagenda(false), sethome(true);
          }}>
          <Image
            source={home ? Imagens.dayon : Imagens.dayoff}
            resizeMode="contain"
          />
          <Title style={home && {color: '#5BD2FF'}}>Home</Title>
        </Item>
        <Item
          onPress={() => {
            setboxDoctor(false), setagenda(true), sethome(false);
          }}>
          <Image
            source={agenda ? Imagens.scheduleon : Imagens.scheduleoff}
            resizeMode="contain"
          />
          <Title style={agenda && {color: '#5BD2FF'}}>Agenda</Title>
        </Item>
        <Item
          onPress={() => {
            setboxDoctor(true), setagenda(false), sethome(false);
          }}>
          <Image
            source={boxDoctor ? Imagens.boxon : Imagens.boxoff}
            resizeMode="contain"
          />
          <Title style={boxDoctor && {color: '#5BD2FF'}}>BoxDoctor</Title>
        </Item>
      </FooterContainer>
    </Container>
  );
};

export default DashBoard;
