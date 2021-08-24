import styled from "styled-components/native"
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/themes";

export const Container = styled.View`
    width: 100%;
    height: ${RFValue(40)}px;
    flex-direction: row;
    position: absolute;
    bottom: 0;
    justify-content: space-around;
    border-top-width: ${RFValue(1)}px;
    border-top-color: ${theme.colors.borderColor};
`;

export const Icon = styled.Image`
    width: ${RFValue(30)}px;
    height: ${RFValue(30)}px;
    margin-top: ${RFValue(5)}px;
`;

export const Button = styled.TouchableOpacity`
`;