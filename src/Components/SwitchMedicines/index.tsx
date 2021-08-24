import React from 'react';
import { ButtonSelector } from '../../Components/ButtonSelector';
import { Container, Content, Title } from './styles';
import { theme } from '../../global/styles/themes';

interface Props {
    CloseModal: (resposta: string) => void;
}

export function SwitchMedicines({ CloseModal }: Props) {
    return (
        <Container onPress={()=>{CloseModal('Tipo de comprimido')}}>
            <Content>
                <Title>Selecione o tipo de medicamento:</Title>
                <ButtonSelector title="capsula" onPress={() => CloseModal('capsula')} />
                <ButtonSelector title="comprimido" onPress={() => CloseModal('comprimido')} />
            </Content>
        </Container>
    )
}