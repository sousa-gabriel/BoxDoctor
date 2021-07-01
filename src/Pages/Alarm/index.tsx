import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header } from '../../Components/Header';
import { Itens } from '../../Components/Itens';

export function Alarm() {
    const listItens = [
        {
            id: '1',
            hours: '10:00',
            title: 'Berotec',
            amountMedicine: '3',
            icon: 'capsula',
            status: 'success',
        },
        {
            id: '2',
            hours: '11:00',
            title: 'Dorflex',
            amountMedicine: '1',
            icon: 'comprimido',
            status: 'inative',
        },
    ]

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
                onPress={()=>{console.log('To botao')}}
            >
                <Text style={styles.addText}>+</Text>
            </TouchableOpacity>
        </View>
    )
}
