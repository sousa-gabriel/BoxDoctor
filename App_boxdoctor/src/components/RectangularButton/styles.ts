import styled,{css} from 'styled-components';
import {RectButton} from 'react-native-gesture-handler'
import { Text } from 'react-native';

interface ButtonProps{
    ContensIcon: boolean;
}
export const ContainerButton = styled(RectButton)`
   width: 200px;
   height: 50px;
   bottom: 20px;

   border-radius:10px;
   position: absolute;
   justify-content: center;
   align-items: center;
   flex-direction: row;
`;

export const ButtonText = styled(Text)<ButtonProps>`
    font-size: 20px;
    font-family: 'RobotoSlab-Medium';

    ${(props) => props.ContensIcon && css`margin-left: 10px`}
`;
