import React, { useState } from 'react';
import { Header } from '../../Components/Header';
import { Container } from './styles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { View, Button, Platform, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function BoxDoctor() {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const [text, setText] = useState('Empty');

    function onChange(event: Event, selectedDate: Date | undefined) {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);

        let tempDate = new Date(currentDate);
        let fTime = 'Horas:' + tempDate.getHours() + '| Minutos: ' + tempDate.getMinutes();
        setText(fTime);
    }


    function showMode() {
        setShow(true);
    }


    return (
        <Container >
            <Header title='Box Doctor' />
            <Button title='selecione a hora' onPress={showMode} />
            <Text>{text}</Text>
            <View style={{ width: 50, height: 50, backgroundColor: '#000' }}>
                {
                    show &&
                    (
                        <>
                            <Feather name='clock' size={40} />

                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode='time'
                                is24Hour={true}
                                display='default'
                                onChange={onChange}
                            />
                        </>
                    )
                }
            </View>
        </Container>
    )
}




// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAO--3J_ePYWcUeO5MCFY0hXMaiFcn0cvs",
//   authDomain: "boxdoctor-1fa77.firebaseapp.com",
//   databaseURL: "https://boxdoctor-1fa77-default-rtdb.firebaseio.com",
//   projectId: "boxdoctor-1fa77",
//   storageBucket: "boxdoctor-1fa77.appspot.com",
//   messagingSenderId: "430502615538",
//   appId: "1:430502615538:web:74758ce6deb9bc5254736b",
//   measurementId: "G-J1L5F0BQJE"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);