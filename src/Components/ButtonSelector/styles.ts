import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/themes';

interface Props{
    color: string;
}

export const  Container = styled.TouchableOpacity<Props>`
    width: 100%;
    height: ${RFValue(50)}px;
    padding-left: ${RFValue(10)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    margin-top: ${RFValue(15)}px;
    margin-bottom: ${RFValue(15)}px;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.borderColor};
    background-color: ${theme.colors.background};
`;

export const  Icon = styled.Image`
    margin-right: ${RFValue(10)}px;
    position: absolute;
    right: ${RFValue(15)}px;
`;

export const  Title = styled.Text`
    font-family: ${theme.fonts.TextInput};
    font-size: ${RFValue(20)}px;
    margin-left: ${RFValue(10)}px;
    color: ${theme.colors.input};
`;
