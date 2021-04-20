import styled from 'styled-components';
import {Text, View, Image, TextInput} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled(Text)`
  color: #2e3957;
  font-family: 'RobotoSlab-Regular';
  font-size: 50px;
  margin-top: 10%;
`;

export const Imagem = styled(Image)`
  position: absolute;
  width: 70%;
  height: 70%;
  left: 10px;
  top: 50%;
`;

export const ContainerDate = styled(View)`
  height: 70%;
  width: 90%;
  background: #9ddbf155;
  border-radius: 10px;

  justify-content: center;
  align-items: center;
`;

export const ContainerImageHeader = styled(View)`
  flex-direction: row;
  position: absolute;
  top: 20px;
`;

export const ImageHeader = styled(Image)`
  width: 250px;
  height: 150px;
`;

export const ImageHeaderFinish = styled(Image)`
  width: 200px;
  height: 150px;
  position: absolute;
  top: 20px;
`;

export const Input = styled(TextInput)`
  height: 100%;
  width: 90%;
  margin-left: 10px;
`;

export const ContainerModal = styled(View)`
  background-color: #fff;
  height: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
export const TitleModal = styled(Text)`
  color: #2e3957;
  font-size: 20px;
  text-align: center;
  font-family: 'RobotoSlab-Medium';
  margin-left: 10px;
`;
