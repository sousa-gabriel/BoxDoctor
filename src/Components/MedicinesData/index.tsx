import React, { useState } from 'react';
import { styles } from './styles';
import { View, Text } from 'react-native';
import { Input } from '../Input';
import { Button } from '../Button';
import { theme } from '../../global/styles/themes';
import { ModalView } from '../../Components/ModalView';
import { ButtonSelector } from '../../Components/ButtonSelector';
import { SwitchMedicines } from '../SwitchMedicines';
import { SmallImput } from '../../Components/SmallImput';

interface Props {
    DataModal: (Data: {}) => void;
}

export function MedicinesData({ DataModal }: Props) {
    const [openModal, setOpenModal] = useState(false);
    const [medicineSelected, setMedicineSelected] = useState('capsula');
    const [nameMedicine, setNameMedicine] = useState('');
    const [quantityMedicine, setQuantityMedicine] = useState('');
    const [horas, setHoras] = useState('');
    const [mintos, setMinutos] = useState('');
    const [dia, setDia] = useState('');
    const [mes, setMes] = useState('');

    function OpenModal() {
        setOpenModal(true);
    }

    function CloseModal(responseModal: string) {
        setOpenModal(false);
        setMedicineSelected(responseModal)
    }

    function handleData() {
        const hora = `${horas}:${mintos}`
        const data = {
            id: '1',
            hours: hora,
            title: nameMedicine,
            amountMedicine: quantityMedicine,
            icon: medicineSelected,
            status: 'success',
        }

        DataModal(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dados do Medicamentos:</Text>
            <Input 
                name='Nome do medicamento' 
                onChangeText={setNameMedicine} 
            />
            <Input 
                name='Quantidade de medicamentos' 
                onChangeText={setQuantityMedicine} 
                keyboardType={'numeric'} 
            />
            <ButtonSelector
                title={medicineSelected}
                color={theme.colors.BackgroundItem}
                onPress={OpenModal}
                icon
            />
            <View style={styles.field}>
                <View>
                    <Text style={[styles.label, { marginBottom: 12 }]}>
                        Die e mês
                    </Text>
                    <View style={styles.column}>
                        <SmallImput maxLength={2}  onChangeText={setDia} />
                        <Text style={styles.divider}>
                            /
                        </Text>
                        <SmallImput maxLength={2} onChangeText={setMes}/>
                    </View>
                </View>
                <View>
                    <Text style={[styles.label, { marginBottom: 12 }]}>
                        Hora e minuto
                    </Text>
                    <View style={styles.column}>
                        <SmallImput maxLength={2} onChangeText={setHoras}/>
                        <Text style={styles.divider}>
                            :
                        </Text>
                        <SmallImput maxLength={2} onChangeText={setMinutos}/>
                    </View>
                </View>
            </View>
            <Button title="Confirmar" color={theme.colors.buttonBackground} onPress={handleData} />
            <ModalView closeModal={() => CloseModal(medicineSelected)} visible={openModal}>
                <SwitchMedicines CloseModal={CloseModal} />
            </ModalView>
        </View>
    )
}