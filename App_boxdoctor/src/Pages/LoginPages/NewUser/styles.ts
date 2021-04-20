import styled from 'styled-components';
import {Image, Text, View, TextInput, TouchableOpacity} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  width: 100%;
  background: #fff;
  align-items: center;
`;

export const Title = styled(Text)`
  color: #2e3957;
  font-family: 'RobotoSlab-Regular';
  font-size: 50px;
  margin-top: 10%;
`;

export const ImagemBoy = styled(Image)`
  position: absolute;
  width: 30%;
  height: 50%;
  right: 10px;
  top: 10%;
`;
export const ImagemGirl = styled(Image)`
  position: absolute;
  width: 30%;
  height: 50%;
  left: 10px;
  top: 50%;
`;
export const ContainerDate = styled(View)`
  height: 70%;
  width: 90%;
  padding-left: 5%;
  background: #9ddbf155;
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const TitleDate = styled(Text)`
  font-size: 25px;
  color: #2e3957;
  margin-top: 20px;
  margin-left: 10px;
  font-family: 'RobotoSlab-Regular';
`;
export const ContainerImput = styled(View)`
  height: 45px;
  width: 90%;
  border-radius: 5px;
  border-width: 1px;
  margin-top: 20px;

  border-width: 1px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
`;

export const Input = styled(TextInput)`
  height: 100%;
  width: 90%;
  margin-left: 10px;
`;

export const ContainerFacebook = styled(TouchableOpacity)`
  width: 95%;
  margin-top: 20px;
  height: 45px;
  border-radius: 5px;
  background: #3b5998;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerGoogle = styled(TouchableOpacity)`
  width: 95%;
  margin-top: 20px;
  height: 45px;
  border-radius: 5px;
  background: #fff;

  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextFacebook = styled(Text)`
  font-size: 18px;
  color: #fff;
  margin-left: 10px;
  font-family: 'RobotoSlab-Regular';
`;

export const TextGoogle = styled(Text)`
  font-size: 18px;
  color: #2e3957;
  margin-left: 10px;
  font-family: 'RobotoSlab-Regular';
`;
