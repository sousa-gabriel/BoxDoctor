import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles';
import { Header } from '../../Components/Header';
import { ContentData } from '../../Components/CotentData';
import { Itens } from '../../Components/Itens';

export function Dashboard() {

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
            status: 'pending',
        },
    ]

    return (
        <View style={styles.container}>
            <Header title='Notas do dia' />
            <ContentData>
                <FlatList
                    data={listItens}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{width: '90%', paddingHorizontal:5}}
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
            </ContentData>
        </View>
    )
}
