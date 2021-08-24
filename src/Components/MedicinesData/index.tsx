import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Input } from '../Input';
import { Button } from '../Button';
import { theme } from '../../global/styles/themes';
import { ModalView } from '../../Components/ModalView';
import { ButtonSelector } from '../../Components/ButtonSelector';
import { SwitchMedicines } from '../SwitchMedicines';
import { SmallInput } from '../SmallInput';
import { Header } from '../Header';
import uuid from 'react-native-uuid';
import {
    ContainerModal,
    Content,
    Title,
    ContainerAlarm,
    ContentAlarm,
    TitleAlarm
} from './styles';
import { RFValue } from 'react-native-responsive-fontsize';

// Ajustar o cancelar para nao salvar um item 
// Ajustar para nao poder salvar sem preencher todos os dados

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
            id: uuid.v4(),
            hours: hora,
            title: nameMedicine,
            amountMedicine: quantityMedicine,
            icon: medicineSelected,
            status: 'inative',
        }

        DataModal(data)
    }

    return (
        <>
            <ContainerModal>
                <Header title="Cadastro de medicamentos" />
                <Content >
                    <View style={{ marginHorizontal: '10%', paddingBottom: 20 }}>
                        <Title >Dados do Medicamentos:</Title>
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
                            onPress={OpenModal}
                            icon
                        />
                        <ContainerAlarm >
                            <TitleAlarm >
                                Hora e minuto
                            </TitleAlarm>
                            <ContentAlarm >
                                <SmallInput maxLength={2} onChangeText={setHoras} />
                                <Text> : </Text>
                                <SmallInput maxLength={2} onChangeText={setMinutos} />
                            </ContentAlarm>
                        </ContainerAlarm>
                        <Button
                            title="Confirmar"
                            color={theme.colors.buttonBackground}
                            onPress={handleData}
                        />
                        <View style={{marginTop:RFValue(20)}}/>
                        <Button
                            title="Cancelar"
                            color={theme.colors.attention}
                            onPress={handleData}
                        />

                        <ModalView
                            closeModal={() => CloseModal(medicineSelected)}
                            visible={openModal}
                        >
                            <SwitchMedicines CloseModal={CloseModal} />
                        </ModalView>
                    </View>
                </Content>
            </ContainerModal>
        </>
    )
}