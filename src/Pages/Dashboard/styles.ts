import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";
import { FontAwesome5 } from "@expo/vector-icons";

export const Container = styled.View`
    flex: 1;
    background-color: ${theme.colors.background};
`
export const ListItems = styled.FlatList``;

export const LogoutButton = styled.TouchableOpacity`
    position: absolute;
    right: ${RFValue(20)}px;
    top: ${RFValue(22)}px;
`;

export const Icon = styled(FontAwesome5)`
    font-size: ${RFValue(24)}px;
    color: ${theme.colors.title};

`;