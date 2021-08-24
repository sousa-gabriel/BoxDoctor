import React from 'react';
import {InputText} from './styles';
import { TextInputProps} from 'react-native';

export function SmallInput({...rest}:TextInputProps){
    return(
        <InputText 
            {...rest}
            keyboardType="numeric"
        />
    )
}