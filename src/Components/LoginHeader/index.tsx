import React from 'react';
import { Container, Title } from './styles';
interface Props {
    title: string;
}

export function LoginHeader({ title }: Props) {
    return (
        <Container >
            <Title >
                {title}
            </Title>
        </Container>
    );
}
