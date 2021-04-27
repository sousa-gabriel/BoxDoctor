/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Container, FooterContainer, Title, Item} from './styles';
import {Imagens} from '../../Constants';
import {Image, View, Text, FlatList} from 'react-native';

const data = [
  {
    horario: '09:30',
    title: 'Dorflex',
    comprimidos: '2 pilalus',
    imagem: 'capsula',
  },
  {
    horario: '09:30',
    title: 'Dorflex',
    comprimidos: '2 pilalus',
    imagem: 'pilula',
  },
];
const DashBoard: React.FC = () => {
  const [home, sethome] = useState(true);
  const [agenda, setagenda] = useState(false);
  const [boxDoctor, setboxDoctor] = useState(false);

  return (
    <Container>
      <View style={{flex: 1, width: '100%'}}>
        <View
          style={{
            borderRadius: 20,
            padding: '5%',
            marginTop: '10%',
            height: '80%',
            width: '80%',
            marginLeft: '10%',
            backgroundColor: '#f1f1f1',
            borderWidth: 1,
            borderColor: '#5BD2FF',
            shadowOffset: {width: 10, height: 5},
            shadowColor: '#00000055',
            shadowOpacity: 1.0,
          }}>
          <Text style={{fontSize: 25}}>Notas do dia:</Text>
          <FlatList
            data={data}
            renderItem={Item => (
              <View
                style={{
                  width: '100%',
                  height: 80,
                  margin: 10,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                }}>
                <View
                  style={{
                    width: '25%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 18}}>{Item.item.horario}</Text>
                </View>
                <View
                  style={{
                    height: '90%',
                    width: '50%',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 25}}>{Item.item.title}</Text>
                  <Text style={{fontSize: 18}}>{Item.item.comprimidos}</Text>
                </View>
                <Image source={Item.item.imagem} resizeMode="contain" />
              </View>
            )}
          />
        </View>
        <Image
          source={Imagens.girlInvert}
          resizeMode="contain"
          style={{position: 'absolute', bottom: 55}}
        />
        <Image
          source={Imagens.Boy}
          resizeMode="contain"
          style={{position: 'absolute', bottom: 53, right: -12}}
        />
      </View>
      <FooterContainer>
        <Item
          onPress={() => {
            setboxDoctor(false), setagenda(false), sethome(true);
          }}>
          <Image
            source={home ? Imagens.dayon : Imagens.dayoff}
            style={{width: 30, height: 30}}
            resizeMode="contain"
          />
          <Title style={home && {color: '#5BD2FF'}}>Home</Title>
        </Item>
        <Item
          onPress={() => {
            setboxDoctor(false), setagenda(true), sethome(false);
          }}>
          <Image
            style={{width: 30, height: 30}}
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
            style={{width: 30, height: 30}}
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
