import styled from 'styled-components';
import {Text, View, Image} from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(View)`
    flex:1;
    width: 100%;
    background: #5BD2FF;
    align-items: center;
`;

export const Title = styled(Text)`
    color: #2E3957;
    font-family: 'RobotoSlab-Regular';
    font-size: 50px;
    margin-top: 20%;
`;
export const ContainerImage = styled(View)`
    position: absolute;
    bottom: 0px;
    height: 65%;
    width: 100%;
    background: #FFF;
    border-top-right-radius: 200px; 
`;

export const ContainerImageRow = styled(View)`
    flex-direction: row;
`;

export const ImagemBox = styled(Image)`
    position: absolute;
    top: -140px;
    width: 50%;
    left:-15px;
`;
export const ImagemPlus = styled(Image)`
    position:absolute; 
    top: -140px;
    right: 0px; 
`;

export const ImagemDoctor = styled(Image)`
    position: absolute; 
    width: 70%;
    height: 70%;
    bottom: -20px;
`;

export const ContainerWelcone = styled(View)`
    align-items:center;
    justify-content: center;
    background: #fff;
    width: 200px;
    height: 100px;
    position: absolute;
    bottom: 60%;
    left: 35%;
    border-width: 1px;
    border-color: #CDCDCD;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const WelconeTitle = styled(Text)`
    color: #2E3957;
    font-family: 'RobotoSlab-Medium';
    font-size: 15px;
`;

export const WelconeButton = styled(RectButton)`
    justify-content: center;
    align-items: center;
    background: #49E1B8;
    width: 120px;
    height: 35px;
    margin-top: 10px;
    border-radius: 10px;
`;

export const WelconeButtonTitle = styled(Text)`
    color: #2E3957;
    font-family: 'RobotoSlab-Medium';
    font-size: 15px;
`;