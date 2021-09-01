import React from 'react';
import { Header } from '../../Components/Header';
import { ContentData } from '../../Components/CotentData';
import { Items } from '../../Components/Items';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../hooks/Auth';
import { Container, ListItems, LogoutButton, Icon} from './styles';

export function Dashboard() {
    const navigation = useNavigation();
    const {signOut} = useAuth();

    const listItems = [
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
        <Container >
            <Header title='Notas do dia' />
            <LogoutButton onPress={signOut} >
                <Icon name="sign-out-alt"/>
            </LogoutButton>
            <ContentData>
                <ListItems
                    data={listItems}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{width: '90%', paddingHorizontal:5}}
                    renderItem={({ item }) => (
                        <Items
                            hours={item.hours}  
                            title={item.title} 
                            amountMedicine={item.amountMedicine}
                            icon={item.icon}
                            status={item.status}
                            onPress={()=>{navigation.navigate('ItensDetails')}}
                        />
                    )}
                />
            </ContentData>
        </Container>
    )
}
