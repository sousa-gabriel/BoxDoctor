import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Platform } from "react-native";

export const ContainerBox = styled.View`
    width: 100%;
    position: absolute;
    top: ${RFPercentage(10)}px;
    flex-direction: row;
`;

export const Box = styled.Image`
    width: ${RFValue(150)}px;
    height: ${RFValue(200)}px;
    left: ${RFValue(0)}px;
    position: absolute;
`;

export const Plus = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(200)}px;
    right: ${Platform.OS === 'ios' ? RFValue(10) : RFValue(60)}px;
    position: absolute;
`;

export const ContainerDoctors = styled.View`
    position: absolute;
    bottom: ${RFValue(0)}px;
    height: ${RFPercentage(60)}px;
    width: ${RFPercentage(100)}px;;
`;

export const Doctors = styled.Image`
    position: absolute;
    left: ${RFValue(3)}px;
    bottom: ${RFValue(0)}px;
    height: ${RFValue(208)}px;
    width: ${RFValue(214)}px;
`;