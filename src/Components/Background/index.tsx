import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { styles } from './styles';

interface Props {
    children: ReactNode;
}
export function Background({ children }: Props) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}
