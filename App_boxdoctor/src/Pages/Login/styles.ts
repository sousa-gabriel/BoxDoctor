import styled from 'styled-components';
import {Text, View, Image} from 'react-native';

export const Container = styled(View)`
    flex: 1;
    background: #fff;
    align-items: center;
    justify-content: flex-start;
`;

export const Title = styled(Text)`
    color: #2E3957;
    font-family: 'RobotoSlab-Regular';
    font-size: 50px;
    margin-top: 20%;
`;

export const Imagem = styled(Image)`
    position: absolute; 
    width: 70%;
    height: 70%;
    left: 10px;
    top: 50%;
`;

