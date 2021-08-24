import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { theme } from "../../global/styles/themes";

export const Container = styled.View`
  height: ${RFValue(50)}px;
  width: 100%;
  margin-top: ${RFValue(15)}px;
  margin-bottom: ${RFValue(15)}px;
  padding-left: ${RFValue(10)}px;
  border-radius: ${RFValue(5)}px;
  border-width: ${RFValue(1)}px;
  align-items: center;
  flex-direction: row;
  border-color: ${theme.colors.borderColor};
  background-color: ${theme.colors.background};
`;

export const InputText = styled.TextInput`
  font-family: ${theme.fonts.TextInput};
  color: ${theme.colors.inputValue};
  font-size: ${RFValue(17)}px;
  height: 100%;
  width: 100%;
  margin-left: ${RFValue(10)}px;
`;