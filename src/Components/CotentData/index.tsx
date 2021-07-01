import React, { ReactNode } from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

interface Props {
    children: ReactNode;
}

export function ContentData({ children }: Props) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}
