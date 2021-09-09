import React, { ReactNode } from 'react';
import { theme } from '../../global/styles/themes';
import { Container } from './styles';

interface Props {
    children: ReactNode;
}

export function ContentData({ children }: Props) {
    return (
        <Container style={theme.colors.shadow}>
            {children}
        </Container>
    )
}
