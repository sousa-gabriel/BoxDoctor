import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`;

export const Content = styled.View`
    background-color: #FFFFFF;
    width: ${RFValue(180)}px;
    height: ${RFValue(100)}px;
    align-items: center;
    justify-content: center;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.borderColor};
    border-radius: ${RFValue(30)}px;
    border-bottom-left-radius: 0;
    bottom: ${RFPercentage(30)}px;
    left: ${RFValue(140)}px;
    position: absolute;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Text500};
    text-align: center;
    font-size: ${RFValue(13)}px;
    color: ${theme.colors.title};
`;

export const ButtonStart = styled(RectButton)`
    width: ${RFValue(105)}px;
    height: ${RFValue(24)}px;
    border-radius: ${RFValue(5)}px;
    margin-top: ${RFValue(10)}px;
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.success};
`;

export const ButtonStartText = styled.Text`
    font-family: ${theme.fonts.TextButton};
    color: ${theme.colors.button};
`;