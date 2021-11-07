import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../global/styles/themes';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: ${RFValue(80)}px;
    margin-bottom: ${RFValue(20)}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: ${RFValue(10)}px;
    padding-right: ${RFValue(10)}px;
    border-bottom-color: ${theme.colors.success};
    border-bottom-width: ${RFValue(5)}px;
    background-color: ${theme.colors.BackgroundItem};
`;
export const Hours = styled.Text`
    width: 20%;
    height: 100%;
    padding-top: 10%;
    margin-right: ${RFValue(5)}px;
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.success};
    font-size: ${RFValue(20)}px;
`;
export const ContentTitle = styled.View`
    width: 66%;
    height: 100%;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.success};
    font-size: ${RFValue(25)}px;
`;
export const SubTitle = styled.Text`
    font-family: ${theme.fonts.Title};
    color: ${theme.colors.success};
    font-size: ${RFValue(15)}px;
`;
export const Icon = styled.Image`
    width: ${RFValue(35)}px;
    height: ${RFValue(35)}px;
`;
export const Power = styled.TouchableOpacity`
    width: ${RFValue(40)}px;
    height: ${RFValue(20)}px;
    border-radius: ${RFValue(10)}px;
    justify-content: center;
    margin-right: 10px;
    border-width: ${RFValue(1)}px;
    border-color: ${theme.colors.borderColor};
`;
export const PowerSelector = styled.View`
    width: ${RFValue(20)}px;
    height: ${RFValue(20)}px;
    border-radius: ${RFValue(10)}px;
`;