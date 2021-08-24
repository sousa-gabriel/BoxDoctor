import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";

export const Container = styled.View`
    width: 100%;
    align-items: center;
    flex-direction: row;
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.title};
    font-size: ${RFValue(25)}px;
`;