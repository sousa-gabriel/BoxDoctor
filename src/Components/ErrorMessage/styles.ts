import styled from 'styled-components';
import {Text} from 'react-native';

export const TextError = styled(Text)`
    width: 80%;
    margin-left: 10%;
    margin-top: 5px;
    color: ${({theme})=>theme.colors.text};
    font-family: ${({theme})=>theme.fonts.bold};
`;