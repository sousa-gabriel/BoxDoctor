import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const BodyContainer = styled.View`
    position: absolute;
    justify-content: center;
    align-items: center;
    background-color: ${({theme})=> theme.colors.secundaryLigth};
    border-width: 2px;
    border-color: #D1D1D1;
    border-radius: 5px;
    top: 15%;
    width: 80%;
    height: 75%;
`;