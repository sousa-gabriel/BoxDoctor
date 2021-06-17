import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
    ContainerButton,
    ButtonText,
} from './styles';

interface PropsButton{
    ColorButton?: string;
    ColorText?:  string;
    IconName?: string;
    handleFunction: ()=>void;
}

const RectangularButton: React.FC<PropsButton> = (
    {children, ColorButton, ColorText,IconName, handleFunction}) => {
    return (
        <ContainerButton  
            style={[{backgroundColor:ColorButton}, ,!IconName && {justifyContent:'center'}]} 
            onPress={handleFunction} >
            {!!IconName &&
                <FontAwesome name={IconName} size={25} color={ColorText || '#707070'} />
            }
            <ButtonText style={{color:ColorText}} ContensIcon={!!IconName}>
                {children}
            </ButtonText>
        </ContainerButton>
    );
}
export default RectangularButton;