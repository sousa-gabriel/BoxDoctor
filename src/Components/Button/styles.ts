import styled,{css} from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler'

interface ButtonProps{
    ContensIcon: boolean;
}
export const ContainerButton = styled(RectButton)<ButtonProps>`
   width: 80%;
   height: 50px;
   margin-left: 10%;
   padding-left: 10px;
   margin-top: 5%;
   border-radius:5px;
   justify-content: flex-start;
   align-items: center;
   flex-direction: row;
`;

export const ButtonText = styled.Text<ButtonProps>`
    font-size: 18px;
    font-family: ${({theme})=>theme.fonts.regular};
    
    ${(props) => props.ContensIcon && css`margin: 10px`}
`;