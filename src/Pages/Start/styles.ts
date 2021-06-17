import styled from 'styled-components/native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    position: absolute;
    top: 0px;
    padding-top: ${RFPercentage(5)}px;
    justify-content: flex-start;
    align-items: center;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme})=> theme.colors.background};
`;

export const BlueHeader = styled.View`
    width: 100%;
    padding-top: ${RFPercentage(5)}px;
    justify-content: flex-start;
    align-items: center;
    height: ${RFPercentage(100)}px;
    background-color: ${({theme})=> theme.colors.secundary};
`;

export const Body = styled.View`
    width: 100%;
    height: ${RFPercentage(63)}px;
    background-color: ${({theme})=> theme.colors.background};
    border-top-right-radius: 200px;
    position: absolute;
    bottom: 0px;
`;
export const Logo = styled.Image`
    width: ${RFValue(211)}px;
    height: ${RFValue(240)}px;
    border-radius: 10px;
`;

export const Title = styled.Text`
    color: ${({theme})=>theme.colors.title};
    font-size: ${RFValue(50)}px;
    font-family: ${({theme})=>theme.fonts.regular};
`;

export const ContainerImage = styled.View`
    width: 100%;
    justify-content: space-around;
    margin-top: -30%;
    flex-direction: row;
`;

export const Images = styled.Image`
    width: ${RFValue(200)}px;
    height: ${RFValue(240)}px;
`;

export const ImageDoctor = styled.Image`
    width: ${RFValue(245)}px;
    height: ${RFValue(250)}px;
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
`;

export const Greetings = styled.View`
    width: ${RFValue(173)}px;
    height: ${RFValue(99)}px;
    border-radius: 15px;
    border-bottom-left-radius: 0px;
    border-width: 1px;
    border-color: #D1D1D1;
    position: absolute;
    bottom: 60%;
    left: 45%;
    align-items: center;
    justify-content: space-around;
    background-color: #FFFFFF;
`;
export const Welcone = styled.Text`
    color: #707070;
    text-align: center;
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(15)}px;
`;
export const ButtonNext = styled.TouchableOpacity`
    width: ${RFValue(100)}px;
    height: ${RFValue(24)}px;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    background-color: ${({theme})=>theme.colors.sucess};
`;
export const TextButtonNext = styled.Text`
    color: ${({theme})=>theme.colors.background};
    font-size: ${RFValue(15)}px;
    font-family: ${({theme})=>theme.fonts.bold};
`;