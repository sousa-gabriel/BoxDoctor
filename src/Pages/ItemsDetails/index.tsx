import React, { useState } from 'react';
import { View, Text, Image, Alert } from 'react-native';
import { Header } from '../../Components/Header';
import { Input } from '../../Components/Input';
import { SmallInput } from '../../Components/SmallInput';
import { SmallButton } from '../../Components/SmallButton';
import { StylesDetalhes } from './styles';
import { ModalView } from '../../Components/ModalView';
import { MedicinesData } from '../../Components/MedicinesData';
import { useNavigation } from '@react-navigation/native';

import Capsula from '../../global/Image/Pill.png';
import Tablete from '../../global/Image/Tablet.png';
import { theme } from '../../global/styles/themes';

export function ItemsDetails() {
    const navigation = useNavigation();
    const [openModalEdit, setOpenModalEdit] = useState(false);

    const data = {
        id: '1',
        hours: '10:00',
        title: 'Berotec',
        amountMedicine: '3',
        icon: 'capsula',
        status: 'success',
    }

    function OpenModal() {
        setOpenModalEdit(true);
    }
    function ExcludeItem(){
        Alert.alert(
            "Excluir Item",
            "Tem certeza que deseja excluir este item?",
            [
                { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
                { text: "Excluir", onPress: () => { 
                    Alert.alert('Item excluido com sucesso'),
                    navigation.navigate('Home')} 
                }
            ]
        );

    }
    function CloseModal() {
        setOpenModalEdit(false);
    }


    return (
        <>
            <Header title="Detalhes dos itens" hasIcon />
            <View style={StylesDetalhes.container}>
                <Text >Dados do Medicamentos:</Text>
                <Input
                    name='Nome do medicamento'
                    value={data.title}
                />
                <Input
                    name='Quantidade de medicamentos'
                    value={data.amountMedicine}
                />
                <View style={StylesDetalhes.icon}>
                    <Image source={data.icon === 'capsula' ? Capsula : Tablete} />
                    <Text style={StylesDetalhes.title}>{data.icon} </Text>
                </View>
                <View >
                    <View >
                        <Text >
                            Hora e minuto
                        </Text>
                        <View >
                            <SmallInput maxLength={2} value={'10'} />
                            <Text >
                                :
                            </Text>
                            <SmallInput maxLength={2} value={'00'} />
                        </View>
                    </View>
                </View>
                <View style={StylesDetalhes.containerIcons}>
                    <SmallButton
                        icon='pencil'
                        color={theme.colors.Loading}
                        colorIcon={'#FFF'}
                        onPress={OpenModal}
                    />
                    <SmallButton
                        icon='check'
                        color={theme.colors.success}
                        colorIcon={'#FFF'}
                        onPress={() => { navigation.navigate('Home') }}
                    />
                    <SmallButton
                        icon='trash'
                        color={theme.colors.attention}
                        colorIcon={'#FFF'}
                        onPress={ExcludeItem}
                    />
                </View>
            </View>
            <ModalView closeModal={CloseModal} visible={openModalEdit}>
                <MedicinesData DataModal={CloseModal} />
            </ModalView>
        </>
    )
}