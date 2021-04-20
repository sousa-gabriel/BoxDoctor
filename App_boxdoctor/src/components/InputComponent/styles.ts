import styled from 'styled-components';
import {TextInput, View} from 'react-native';

export const Input = styled(TextInput)`
  height: 100%;
  width: 90%;
  margin-left: 10px;
`;

export const ContainerImput = styled(View)`
  height: 45px;
  width: 250px;
  border-radius: 5px;
  border-width: 1px;
  margin-top: 20px;

  border-width: 1px;
  padding: 10px;
  align-items: center;
  flex-direction: row;
`;
