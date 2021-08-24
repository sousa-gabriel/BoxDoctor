import React from 'react';
import { TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Container, InputText } from './styles';
import { theme } from '../../global/styles/themes';

interface Props extends TextInputProps {
  name: string;
  icon?: string;
}

export function Input({ name, icon,  ...rest }: Props) {
  return (
    <Container  style={theme.colors.shadow}>
      {
        icon &&
        <Feather name={icon} size={25} />
      }
      <InputText
        {...rest}
        placeholder={name}
        placeholderTextColor={theme.colors.input}
      />
    </Container>
  );
};