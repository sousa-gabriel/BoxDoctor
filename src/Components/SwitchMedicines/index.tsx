import React from 'react';
import { styles } from './styles';
import { View, Text, TouchableOpacity } from 'react-native';
import { theme } from '../../global/styles/themes';
import { ButtonSelector } from '../../Components/ButtonSelector';

interface Props {
    CloseModal: (resposta: string) => void;
}

export function SwitchMedicines({ CloseModal }: Props) {
    return (
        <TouchableOpacity style={styles.overlay} onPress={()=>{CloseModal('Tipo de comprimido')}}>
            <View style={styles.container}>
                <Text style={styles.title}>Selecione o tipo de medicamento:</Text>
                <ButtonSelector
                    title="capsula"
                    color={theme.colors.BackgroundItem}
                    onPress={() => CloseModal('capsula')}
                />
                <ButtonSelector
                    title="comprimido"
                    color={theme.colors.BackgroundItem}
                    onPress={() => CloseModal('comprimido')}
                />
            </View>
        </TouchableOpacity>
    )
}