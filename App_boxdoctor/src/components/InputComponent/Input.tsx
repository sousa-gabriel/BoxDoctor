import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {TextInputProps} from 'react-native';
import {Input, ContainerImput} from './styles';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

const InputComponent: React.FC<InputProps> = ({name, icon, ...rest}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <ContainerImput
      style={
        isFocused
          ? {backgroundColor: '#fff', borderColor: '#5BD2FF'}
          : {backgroundColor: '#fff', borderColor: '#707070'}
      }>
      <Icon
        name={icon}
        size={20}
        style={isFocused ? {color: '#5BD2FF'} : {color: '#707070'}}
      />
      <Input
        {...rest}
        placeholder={name}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </ContainerImput>
  );
};
export default InputComponent;
