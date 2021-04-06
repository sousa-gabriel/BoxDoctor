import styled from 'styled-components';
import {Text, View, Image} from 'react-native';

export const Container = styled(View)`
    flex: 1;
    background: #FFF;
    align-items: center;
    justify-content: center;
`;

export const Title = styled(Text)`
    color: #000;
    font-family: 'RobotoSlab-Regular';
    font-weight: bold;
    font-size: 50px;
`;

export const Imagem = styled(Image)`
    width: 80%;
    height: 40%;
    margin-top: 20px;
    margin-bottom: 20px;
`;