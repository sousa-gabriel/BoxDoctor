import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { theme } from "../../global/styles/themes";

export const Container = styled.TouchableOpacity`
    height: ${RFValue(60)}px;
    width: ${RFValue(100)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.background};
`;