import styled from 'styled-components';
import {Text, View, Image} from 'react-native';

export const Container = styled(View)`
    flex:1;
    width: 100%;
    background: #FFF;
    align-items: center;
`;

export const Title = styled(Text)`
    color: #000;
    font-family: 'RobotoSlab-Regular';
    font-size: 50px;
    margin-top: 20%;
`;

export const Imagem = styled(Image)`
    
`;

export const ContainerImage = styled(View)`
    position: absolute;
    bottom: 0px;
    height: 65%;
    width: 100%;
    background: #FFF;
    border-top-right-radius: 200px; 
`;
