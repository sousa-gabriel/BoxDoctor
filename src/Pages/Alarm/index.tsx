import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, Subtitle, Content, ButtonAdd, TextButtonAdd } from './styles';
import { Header } from '../../Components/Header';
import { Items } from '../../Components/Items';
import { ModalView } from '../../Components/ModalView';
import { MedicinesData } from '../../Components/MedicinesData';
import { ItemsProps } from '../../Components/Items';
import { useNavigation } from '@react-navigation/native';
import { theme } from '../../global/styles/themes';

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
        <Container >
            <Header title='Alarmes Adicionados' />
             <Subtitle > Lista de Alarmes</Subtitle>
            <Content>
                <FlatList
                    data={listItems}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{width:'100%', paddingHorizontal:5}}
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
            </Content> 
            <ButtonAdd 
                activeOpacity={0.7}
                style={theme.colors.shadow} 
                onPress={OpenModal}
            >
                <TextButtonAdd>+</TextButtonAdd>
            </ButtonAdd>
            <ModalView closeModal={() => CloseModal('cancel')} visible={openModal}>
                <MedicinesData DataModal={CloseModal}/>
            </ModalView>
        </Container>
    )
}
