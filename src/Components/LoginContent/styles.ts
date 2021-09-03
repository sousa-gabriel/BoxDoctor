import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    margin-top: ${RFPercentage(30)}px;
    height: ${RFValue(200)}px;
    margin-left: 10%;
    justify-content: space-evenly;
    padding-top: ${RFValue(5)}px;
`;

export const Content = styled.ScrollView`
    width: 100%;
    height: 100%;
    padding: ${RFValue(20)}px;
`;