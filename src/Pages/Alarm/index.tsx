import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, Subtitle, Content, ButtonAdd, TextButtonAdd } from './styles';
import { Header } from '../../Components/Header';
import { Items } from '../../Components/Items';
import { ModalView } from '../../Components/ModalView';
import { MedicinesData } from '../../Components/MedicinesData';
import { ItemsProps } from '../../Components/Items';
import { theme } from '../../global/styles/themes';
import { useGetAlarms } from '../../hooks/Alarm';
import { useIsFocused } from '@react-navigation/core';

export function Alarm() {
    const [openModal, setOpenModal] = useState(false);
    const {getAlarmAll, Alarms} = useGetAlarms();
    const isFocused = useIsFocused();

    useEffect(() => {
        getAlarmAll();
    }, [getAlarmAll, isFocused]);


    function OpenModal() {
        setOpenModal(true);
    }

    function CloseModal() {
        setOpenModal(false);
    }


    function handleAlarmItems(ItemSelected: ItemsProps) {
        console.log(ItemSelected)
    }

    return (
        <Container >
            <Header title='Alarmes Adicionados' />
            <Subtitle > Lista de Alarmes</Subtitle>
            <Content>
                <FlatList
                    data={Alarms}
                    keyExtractor={(item) => `id-${item.id}`}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width: '100%', paddingHorizontal: 5 }}
                    renderItem={({ item }) => (
                        <Items
                            hours={item.hours}
                            title={item.title}
                            amountMedicine={item.amountMedicine}
                            active
                            status={item.status}
                            onPress={() => { handleAlarmItems(item) }}
                        />
                    )}
                />
            </Content>
            <ButtonAdd
                activeOpacity={0.7}
                style={theme.colors.shadow}
                onPress={OpenModal}
            >
                <TextButtonAdd>+</TextButtonAdd>
            </ButtonAdd>
            <ModalView closeModal={CloseModal} visible={openModal}>
                <MedicinesData closeModal={() => { CloseModal() }} />
            </ModalView>
        </Container>
    )
}
