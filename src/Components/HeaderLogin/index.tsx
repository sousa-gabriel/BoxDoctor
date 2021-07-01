import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    title: string;
}
export function HeaderLogin({ title }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
        </View>
    );
}
