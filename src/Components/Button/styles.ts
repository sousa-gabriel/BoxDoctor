import styled, { css } from 'styled-components/native';
import { theme } from '../../global/styles/themes';
import { RFValue } from 'react-native-responsive-fontsize';

interface Button {
    color: string;
    colorText: string;
    hasIcon: boolean;
}

export const ButtonContainer = styled.TouchableOpacity<Button>`
    height: ${RFValue(50)}px;
    width: auto;
    border-radius: ${RFValue(10)}px;
    ${({ hasIcon }) => hasIcon 
        ? css`
            justify-content: flex-start;
            padding-left: ${RFValue(25)}px;
        ` 
        : css`
            justify-content: center;
    `};
    align-items: center;
    flex-direction: row;
    background-color: ${({ color }) => color};
`;

export const TitleButton = styled.Text<Button>`
    font-family: ${theme.fonts.TextButton};
    font-size: ${RFValue(17)}px;
    ${({ hasIcon }) => hasIcon && css` margin-left: ${RFValue(25)}px;`};
    color: ${({ colorText }) => colorText ? colorText : theme.colors.button};
`;