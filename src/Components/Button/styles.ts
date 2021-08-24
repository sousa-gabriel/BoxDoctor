import styled from 'styled-components/native';
import { theme } from '../../global/styles/themes';
import { RFValue } from 'react-native-responsive-fontsize';

interface Button{
    color: string;
    colorText: string;
}

export const ButtonContainer = styled.TouchableOpacity<Button>`
    height: ${RFValue(50)}px;
    width: auto;
    padding-left: ${RFValue(5)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${(props) => props.color};
`;

export const TitleButton = styled.Text<Button>`
    font-family: ${theme.fonts.TextButton};
    font-size: ${RFValue(17)}px;
    color: ${(props)=> props.colorText ? props.colorText : theme.colors.button};
`;