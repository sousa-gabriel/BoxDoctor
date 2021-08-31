import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/themes";

export const Container = styled.View`
    flex: 1;
    width: 100%;
    background-color: ${theme.colors.background};
`;

export const Subtitle = styled.Text`
    width: 100%;
    font-family: ${theme.fonts.subtitle};
    font-size: ${RFValue(20)}px;
    color: ${theme.colors.Loading};
    margin: ${RFValue(20)}px;
`;

export const Content = styled.View`
    justify-content: center;
    margin-left: 5%;
    margin-right: 5%;
`;

export const ButtonAdd = styled.TouchableOpacity`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(60)}px;
    position: absolute;
    bottom: ${RFValue(10)}px;
    right: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.buttonBackground};
`;
export const TextButtonAdd = styled.Text`
    font-family: ${theme.fonts.Text500};
    color: ${theme.colors.button};
    font-size: ${RFValue(45)}px;
`;