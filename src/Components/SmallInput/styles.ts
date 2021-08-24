import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/themes';

export const InputText = styled.TextInput`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    background-color: ${theme.colors.BackgroundItem};
    color: ${theme.colors.inputValue};
    border-radius: ${RFValue(8)}px;
    font-family: ${theme.fonts.Text500};
    font-size: ${RFValue(13)}px;
    margin-right: ${RFValue(4)}px;
    text-align: center;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.borderColor};
`;