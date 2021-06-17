import React from 'react';
import {TextInputProps} from 'react-native';
import {
    Input, 
    ContainerImput
} from './styles';
import { AntDesign } from '@expo/vector-icons';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const InputComponent: React.FC<InputProps> = ({name, icon, ...rest}) => {

  return (
    <ContainerImput>
      <AntDesign name={icon} size={25} color='#D1D1D1'/>
      <Input
        {...rest}
        placeholder={name}
      />
    </ContainerImput>
  );
};
export default InputComponent;