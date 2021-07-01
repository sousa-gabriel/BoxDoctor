import React from 'react';
import { BackgroundLogin } from '../../Components/BackgroundLogin';
import { ContentLogin } from '../../Components/ContentLogin';
import { useNavigation } from '@react-navigation/core';
import { ModalView } from '../../Components/ModalView';
import { theme } from '../../global/styles/themes';
import { HeaderLogin } from '../../Components/HeaderLogin';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';
import { View, Alert, Text } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

interface data {
    data: {
        name: string,
        phone?: string,
        email: string,
        key: string,
    }
}

export function CreateUser() {
    const navigation = useNavigation();
    const [openModal, setOpenModal] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [key, setKey] = useState('');

    const data = {
        name: name,
        email: email,
        phone: phone,
        key: key,
    }

    function OpenModal() {
        setOpenModal(true);
    }
    function teste(){
        console.log('oiii')
        navigation.navigate('Home')
    }
    function CloseModal() {
        setOpenModal(false);
    }
    function Validate(data: data) {
        if (data.name.length > 0) {
            if (data.email.length > 0) {
                if (data.key.length > 0) {
                    { OpenModal() }
                } else { Alert.alert('Campo senha é obrigratório'); }
            } else { Alert.alert('Campo email é obrigratório'); }
        } else { Alert.alert('Campo nome é obrigratório'); }
    }

    return (
        <View >
            <HeaderLogin title='BoxDoctor' />
            <BackgroundLogin />
            <ContentLogin>
                <Input
                    name='Nome'
                    icon='user-plus'
                    onChangeText={setName}
                    value={name}
                    mandatory={!name}
                />
                <Input
                    name='E-mail'
                    icon='mail'
                    onChangeText={setEmail}
                    value={email}
                    mandatory={!email}
                />
                <Input
                    name='Telefone'
                    icon='phone'
                    onChangeText={setPhone}
                    value={phone}
                />
                <Input
                    name='senha'
                    icon='lock'
                    onChangeText={setKey}
                    value={key}
                    mandatory={!key}
                />

                <Button
                    color={theme.colors.buttonBackground}
                    title='Finalizar'
                    onPress={() => { Validate(data) }}
                />
            </ContentLogin>
            <ModalView closeModal={CloseModal} visible={openModal}>
                <View style={styles.modal}>
                    <Text style={styles.textModal}>
                        {`Parabéns ${name} seu cadastro foi realizado com sucesso...`}
                    </Text>
                    <Button
                        color={theme.colors.buttonBackground}
                        title='Iniciar'
                        // onPress={teste}
                    />
                </View>
            </ModalView>
        </View>
    );
}