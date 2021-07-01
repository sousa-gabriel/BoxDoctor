import React from 'react';
import { BackgroundLogin } from '../../Components/BackgroundLogin';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { HeaderLogin } from '../../Components/HeaderLogin';
import { View, Text } from 'react-native';
import { styles } from './styles';

export function Start() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <HeaderLogin title="BoxDoctor" />
            <BackgroundLogin />
            <View style={styles.welcone}>
                <Text style={styles.welconeText}>
                    Bem vindo!!{'\n'}ao{'\n'}BoxDoctor
                </Text>
                <RectButton 
                    style={styles.buttonStart} 
                    onPress={() => { navigation.navigate('Login') }}
                >
                    <Text style={styles.buttonStartText}>
                        Iniciar
                    </Text>
                </RectButton>
            </View>
        </View>
    )
}
