import React, { ReactNode } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { styles } from './styles';

import LogoImg from '../../global/Image/Logo.png'
interface Props {
    children: ReactNode;
}

export function ContentLogin({ children }: Props) {
    return (
        <View style={styles.container}>
            <ScrollView 
                style={styles.content} 
                contentContainerStyle={{paddingBottom: 40}}             
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerImage}>
                    <Image source={LogoImg} style={styles.image} />
                </View>
                {children}
            </ScrollView>
        </View>
    )
}
