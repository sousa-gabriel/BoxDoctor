import styled from 'styled-components';
import {Text, TouchableOpacity, View, SafeAreaView} from 'react-native';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: #fff;
`;

export const FooterContainer = styled(View)`
  width: 100%;
  height: 80px;
  bottom: 3px;
  border-color: #f1f1f1;
  border-top-width: 2px;
  margin-bottom: 15px;
  padding-top: 10px;

  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled(Text)`
  color: #707070;
  font-family: 'RobotoSlab-Regular';
  font-size: 15px;
  margin-top: 5px;
`;
export const Item = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
`;
