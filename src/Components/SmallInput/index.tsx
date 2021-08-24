import React from 'react';
import {InputText} from './styles';
import { TextInputProps} from 'react-native';
import { theme } from '../../global/styles/themes';

export function SmallInput({...rest}:TextInputProps){
    return(
        <InputText 
            {...rest}
            style={theme.colors.shadow}
            keyboardType="numeric"
        />
    )
}