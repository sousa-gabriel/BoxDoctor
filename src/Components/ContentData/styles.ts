import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/themes";


export const Container = styled.View`
    height: 78%;
    width: 90%;
    margin-top: ${RFValue(20)}px;
    padding-left: ${RFValue(5)}px;
    padding-right: ${RFValue(5)}px;
    margin-left: 5%;
    background-color: ${theme.colors.contentData};
    align-items: center;
    padding-top: ${RFValue(20)}px;
    border-width: ${RFValue(1)}px;
    border-radius: ${RFValue(20)}px;
    border-color: ${theme.colors.primary};
`;
