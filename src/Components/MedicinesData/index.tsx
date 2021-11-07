import React, { useState, useEffect } from 'react';
import { Platform, View } from 'react-native';
import { theme } from '../../global/styles/themes';
import uuid from 'react-native-uuid';
import { Input } from '../Input';
import { Button } from '../Button';
import { ModalView } from '../../Components/ModalView';
import { ButtonSelector } from '../../Components/ButtonSelector';
import { SwitchMedicines } from '../SwitchMedicines';
import { Header } from '../Header';
import DateTimePicker from '@react-native-community/datetimepicker';
import { RFValue } from 'react-native-responsive-fontsize';
import { useCreatedNewAlarm, useGetAlarms } from '../../hooks/Alarm';

import {
    ContainerModal,
    Content,
    Title,
    ContainerAlarm,
    ContentAlarm,
    TitleAlarm,
    DateButton,
    TextAlarm,
    ViewTime
} from './styles';

interface Props {
    closeModal: () => void;
}

export function MedicinesData({ closeModal }: Props) {
    const {CreatedNewAlarm} = useCreatedNewAlarm();
    const [openModal, setOpenModal] = useState(false);
    const [medicineSelected, setMedicineSelected] = useState('capsula');
    const [nameMedicine, setNameMedicine] = useState('');
    const [quantityMedicine, setQuantityMedicine] = useState('');
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [time, setTime] = useState('00:00');
    const { getAlarmAll, Alarms } = useGetAlarms();


    function OpenModalTypeMedicines() {
        setOpenModal(true);
    }

    function CloseModalTypeMedicines(responseModal: string) {
        setOpenModal(false);
        setMedicineSelected(responseModal)
    }

    function onChange(event: Event, selectedDate: Date | undefined) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let Hours = `${("0" + tempDate.getHours()).slice(-2)}:${("0" + tempDate.getMinutes()).slice(-2)}`;
        setTime(Hours);
    }

    async function handleData() {
        const newAlarm = {
            id: uuid.v4(),
            hours: time,
            title: nameMedicine,
            amountMedicine: quantityMedicine,
            icon: medicineSelected,
            status: 'inactive',
        }
        
        CreatedNewAlarm(Alarms, newAlarm);
        closeModal();
    }

    useEffect(() => {
        getAlarmAll();
    }, [getAlarmAll]);

    return (
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
                        onPress={OpenModalTypeMedicines}
                        icon
                    />
                    <ContainerAlarm >
                        <TitleAlarm >
                            Hora do Alarme
                        </TitleAlarm>
                        <ContentAlarm >
                            <DateButton onPress={() => { setShow(true) }} >
                                {Platform.OS === 'android' && <TextAlarm>{time}</TextAlarm>}
                                {
                                    show &&
                                    (
                                        <ViewTime>
                                            <DateTimePicker
                                                testID='dateTimePicker'
                                                value={date}
                                                mode='time'
                                                is24Hour={true}
                                                display='default'
                                                onChange={onChange}
                                            />
                                        </ViewTime>
                                    )
                                }
                            </DateButton>
                        </ContentAlarm> 
                    </ContainerAlarm>
                    <Button
                        title="Confirmar"
                        color={theme.colors.buttonBackground}
                        onPress={handleData}
                    />
                    <View style={{ marginTop: RFValue(20) }} />
                    <Button
                        title="Cancelar"
                        color={theme.colors.attention}
                        onPress={()=>closeModal()}
                    />

                    <ModalView
                        closeModal={() => CloseModalTypeMedicines(medicineSelected)}
                        visible={openModal}
                    >
                        <SwitchMedicines CloseModal={CloseModalTypeMedicines} />
                    </ModalView>
                </View>
            </Content>
        </ContainerModal>
    )
}