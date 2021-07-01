import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    title: string,
    hasIcon?: boolean,
}

export function Header({ title, hasIcon }: Props) {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            { hasIcon &&
                <BorderlessButton onPress={() => { navigation.goBack() }}>
                    <Feather name='arrow-left' size={25} style={styles.icon} />
                </BorderlessButton>
            }
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}
