import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './styles';

import BoxImg from '../../global/Image/Box.png';
import PlusImg from '../../global/Image/Plus.png';
import Doctor from '../../global/Image/Doctor.png';

export function BackgroundLogin() {
    return (
        <>
            <View style={styles.container}>
                <Image source={BoxImg} style={styles.imageBox} />
                <Image source={PlusImg} style={styles.imagePlus} />
            </View>
            <View style={styles.doctor}>
                <Image source={Doctor} style={styles.imageDoctor} />
            </View>
        </>
    );
}