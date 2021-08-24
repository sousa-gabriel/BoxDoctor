import React, { useState } from 'react';
import {TouchableOpacity } from 'react-native';
import offCalendarImg from '../../global/Image/offCalendar.png';
import onCalendarImg from '../../global/Image/onCalendar.png';
import offAlarmImg from '../../global/Image/offAlarm.png';
import onAlarmImg from '../../global/Image/onAlarm.png';
import offBoxImg from '../../global/Image/offBox.png';
import onBoxImg from '../../global/Image/onBox.png';
import { Container, Icon, Button } from './styles';

interface Props {
    Active: (item: string) => void;
}

export function Footer({ Active }: Props) {
    const [calendar, setCalendar] = useState(true);
    const [alarm, setAlarm] = useState(false);
    const [box, setBox] = useState(false);

    function handleCalendar() {
        setCalendar(true);
        setAlarm(false);
        setBox(false);
        Active('Calendar');
    }

    function handleAlarm() {
        setCalendar(false);
        setAlarm(true);
        setBox(false);
        Active('Alarm');
    }

    function handleBox() {
        setCalendar(false);
        setAlarm(false);
        setBox(true);
        Active('Box');
    }
    return (
        <Container >
            <Button activeOpacity={0.7} onPress={handleCalendar}>
                {<Icon source={calendar ? onCalendarImg : offCalendarImg} />}
            </Button>
            <Button activeOpacity={0.7} onPress={handleAlarm}>
                {<Icon source={alarm ? onAlarmImg : offAlarmImg} />}
            </Button>
            <Button activeOpacity={0.7} onPress={handleBox}>
                {<Icon source={box ? onBoxImg : offBoxImg} />}
            </Button>
        </Container>
    )
}