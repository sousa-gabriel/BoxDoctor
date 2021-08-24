import styled from "styled-components/native";
import { Platform } from "react-native";
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight()}px;
    padding-bottom: ${Platform.OS === 'android' ? RFValue(15) : getBottomSpace()}px;
`;