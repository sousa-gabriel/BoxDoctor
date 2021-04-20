import styled from 'styled-components';
import {Text, TouchableOpacity, View} from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background: #fff;
`;

export const FooterContainer = styled(View)`
  flex-direction: row;
  width: 100%;
  position: absolute;
  bottom: 10px;
  margin-bottom: 20px;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled(Text)`
  color: #c4c4c4;
  font-family: 'RobotoSlab-Regular';
  font-size: 10px;
  margin-top: 5px;
`;
export const Item = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;
