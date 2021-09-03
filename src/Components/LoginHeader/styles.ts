import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";

export const Container = styled.View`
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Title};
    font-size: ${RFValue(50)}px;
    color: ${theme.colors.title};
`;