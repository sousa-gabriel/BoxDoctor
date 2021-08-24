import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";
import { RFValue } from "react-native-responsive-fontsize";

export const ContainerModal = styled.View`
    flex: 1;
    background-color: ${theme.colors.BackgroundItem};
    align-items: center;
    justify-content: center;
    margin-top: 10%;
`;

export const Content = styled.ScrollView`
    flex: 1;
    background-color: ${theme.colors.BackgroundItem};
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.primary};
    font-size: ${RFValue(20)}px;
    margin-top: ${RFValue(20)}px;
    margin-bottom: ${RFValue(20)}px;
`;
export const ContainerAlarm = styled.View`
    width: 80%;
    justify-content: center;
    margin-top: ${RFValue(30)}px;
`;

export const ContentAlarm = styled.View`
    flex-direction: row;
    align-items: center;
    margin-vertical: ${RFValue(20)}px;
`;

export const TitleAlarm= styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.primary};
`;
