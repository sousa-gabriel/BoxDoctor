import React, { useState, useEffect } from 'react';
import { Header } from '../../Components/Header';
import { ContentData } from '../../Components/ContentData';
import { Items } from '../../Components/Items';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';
import { NewAlarm, useAlarmData } from '../../hooks/Alarm';
import { Container, ListItems, LogoutButton, Icon } from './styles';

export function Dashboard() {
    const navigation = useNavigation();
    const { signOut } = useAuth();
    const { SearchRegister } = useAlarmData();
    const [data, setData] = useState<NewAlarm[]>([]);

    async function loadData() {
        try {
            const response = await SearchRegister();

            if (response) {
                const alarms = response ? JSON.parse(response) : [];
                setData(alarms);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        loadData();
    }, []);

    return (
        <Container >
            <Header title='Notas do dia' />
            <LogoutButton onPress={signOut} >
                <Icon name="sign-out-alt" />
            </LogoutButton>
            <ContentData>
                <ListItems
                    data={data}
                    keyExtractor={(item: { id: string; }) => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width: '90%', paddingHorizontal: 5 }}
                    renderItem={({ item }) => (
                        <Items
                            hours={item.hours}
                            title={item.title}
                            amountMedicine={item.amountMedicine}
                            icon={item.icon}
                            status={item.status}
                            onPress={() => { console.log('oii') }}
                        />
                    )}
                />
            </ContentData>
        </Container>
    )
}
