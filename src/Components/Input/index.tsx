import React from 'react';
import { View, TextInput, TextInputProps } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './styles';
import { theme } from '../../global/styles/themes';

interface Props extends TextInputProps {
  name: string;
  icon: string;
  mandatory?: boolean;
}

export function Input({ name, icon, mandatory, ...rest }: Props) {
  return (
    <View style={[
      styles.container,
      { borderColor: mandatory ? theme.colors.title : theme.colors.borderColor }
    ]}>
      <Feather name={icon} size={25} color={mandatory ? theme.colors.title : theme.colors.borderColor} />
      <TextInput
        {...rest}
        style={styles.input}
        placeholder={name}
        placeholderTextColor={theme.colors.imput}
      />
    </View>
  );
};