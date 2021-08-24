import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header } from '../../Components/Header';
import { Items } from '../../Components/Items';
import { ModalView } from '../../Components/ModalView';
import { MedicinesData } from '../../Components/MedicinesData';
import { ItemsProps } from '../../Components/Items';
import { useNavigation } from '@react-navigation/native';

export function Alarm() {
    const navigation = useNavigation();
    const [openModal, setOpenModal] = useState(false);
    const [data, setData] = useState({});
    const [listItems, setlistItems] = useState<ItemsProps[]>([])

    function OpenModal() {
        setOpenModal(true);
    }

    function CloseModal(responseModal: {}) {
        setOpenModal(false);
        const dados = listItems
        listItems.push(responseModal)
        console.log(listItems)
    }

    function handleAlarmItems(ItemSelected:ItemsProps) {
        console.log(ItemSelected)
    }

    return (
        <View style={styles.container}>
            <Header title='Alarmes Adicionados' />
             <Text style={styles.subtitle}> Lista de Alarmes</Text>
            <View style={styles.content}>
                <FlatList
                    data={listItems}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.list}
                    renderItem={({ item }) => (
                        <Items
                            hours={item.hours}
                            title={item.title}
                            amountMedicine={item.amountMedicine}
                            active
                            status={item.status}
                            onPress={()=>{handleAlarmItems(item)}}
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
