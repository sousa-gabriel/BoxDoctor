import React, { useEffect } from 'react';
import { Items } from '../../Components/Items';
import { useAuth } from '../../context/Auth';
import { 
    Container, 
    ListItems, 
    LogoutButton, 
    Icon, 
    DoctorContent, 
    DoctorName, 
    DoctorPhoto
} from './styles';
import { useGetAlarms } from '../../hooks/Alarm';
import { useIsFocused } from '@react-navigation/core';
import { useCreatedUser } from '../../hooks/User';

export function Dashboard() {
    const { signOut, user } = useAuth();
    const {getAlarmAll, Alarms} = useGetAlarms();
    const isFocused = useIsFocused();
    const {CreatedUser} = useCreatedUser();

    useEffect(() => {
        getAlarmAll();
        CreatedUser();
    }, [getAlarmAll, isFocused]);

    return (
        <Container >           
            <DoctorContent>
                <DoctorPhoto source={{uri: user.photo}}/>
                <DoctorName>{user.name}</DoctorName>
            </DoctorContent>
            <LogoutButton onPress={signOut} >
                <Icon name="sign-out-alt" />
            </LogoutButton>
            <ListItems
                data={Alarms}
                keyExtractor={(item) => `id-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ width: '100%', marginTop: 20 }}
                renderItem={( {item} ) => (
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
        </Container>
    )
}
