import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
    padding-left: ${RFValue(20)}px;
    padding-right: ${RFValue(20)}px;
    padding-top: ${RFValue(20)}px;
`;

export const DoctorContent = styled.View`
    flex-direction: row;
`;

export const DoctorPhoto = styled.Image`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: 5px;
    border-width: 3px;
    border-color: ${theme.colors.backgroundModal};
`;
export const DoctorName  = styled.Text`
    font-size:  ${RFValue(20)}px;
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.title};
    margin-left: ${RFValue(20)}px;
    width: 50%;
`;

export const LogoutButton = styled.TouchableOpacity`
    position: absolute;
    right: ${RFValue(20)}px;
    top: ${RFValue(22)}px;
`;

export const Icon = styled(FontAwesome5)`
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.title};
`;

export const ListItems = styled.FlatList``;