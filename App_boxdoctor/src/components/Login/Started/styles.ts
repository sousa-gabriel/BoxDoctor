import styled from 'styled-components';
import {Text, View, Image} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background: #fff;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  color: #2e3957;
  font-family: 'RobotoSlab-Regular';
  font-size: 50px;
  margin-top: 20%;
`;

export const Imagem = styled(Image)`
  width: 80%;
  height: 50%;
  margin-top: 20%;
`;
