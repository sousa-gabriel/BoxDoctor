import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native"
import { theme } from "../../global/styles/themes";

export const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: ${theme.colors.backgroundModal};
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    width: 80%;
    border-radius: ${RFValue(10)}px;
    height: auto;
    background-color: ${theme.colors.background};
    padding: ${RFValue(20)}px;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
    font-size: ${RFValue(18)}px;
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.primary};
    text-align: center;
`;