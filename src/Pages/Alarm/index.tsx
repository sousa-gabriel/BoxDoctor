import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header } from '../../Components/Header';
import { Itens } from '../../Components/Itens';
import { ModalView } from '../../Components/ModalView';
import { MedicinesData } from '../../Components/MedicinesData';

export function Alarm() {
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({});
    const [listItens, setlistItens] = useState([])

    function OpenModal() {
        setOpenModal(true);
    }

    function CloseModal(responseModal: {}) {
        setOpenModal(false);
        const dados = listItens
        listItens.push(responseModal)
        console.log(listItens)
    }

    return (
        <View style={styles.container}>
            <Header title='Notas do dia' />
            <Text style={styles.subtitle}> Lista de Alarmes</Text>
            <View style={styles.content}>
                <FlatList
                    data={listItens}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width: '100%', paddingHorizontal: 5  }}
                    renderItem={({ item }) => (
                        <Itens
                            hours={item.hours}
                            title={item.title}
                            amountMedicine={item.amountMedicine}
                            icon={item.icon}
                            status={item.status}
                        />
                    )}
                />
            </View>
            <TouchableOpacity 
                activeOpacity={0.7}
                style={styles.add} 
                onPress={OpenModal}
            >
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
            <ModalView closeModal={() => CloseModal('cancel')} visible={openModal}>
                <MedicinesData DataModal={CloseModal}/>
            </ModalView>
        </View>
    )
}
