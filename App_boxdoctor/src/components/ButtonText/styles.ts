import styled from 'styled-components';
import {Text, TouchableOpacity} from 'react-native';

export const ContainerButton = styled(TouchableOpacity)`
  width: 250px;
  height: 50px;

  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const TextButton = styled(Text)`
  font-size: 15px;
  font-family: 'RobotoSlab-Medium';
  margin-left: 10px;
`;
