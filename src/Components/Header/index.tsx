import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Container, Title } from './styles';
import { theme } from '../../global/styles/themes';

interface Props {
    title: string,
    hasIcon?: boolean,
}

export function Header({ title, hasIcon }: Props) {
    const navigation = useNavigation();

    return (
        <Container >
            { hasIcon &&
                <BorderlessButton onPress={() => { navigation.goBack() }}>
                    <Feather name='arrow-left' size={25} color={theme.colors.title} />
                </BorderlessButton>
            }
            <Title >{title}</Title>
        </Container>
    )
}
