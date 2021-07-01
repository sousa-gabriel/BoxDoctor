import React, { useState } from 'react';
import { Footer } from '../../Components/Footer';
import { Dashboard } from '../Dashboard';
import { Alarm } from '../Alarm';
import { BoxDoctor } from '../BoxDoctor';

export function Home() {
    const [active, setActive] = useState('Calendar')

    function handleActive(activeItem: string) {
        setActive(activeItem);
    }
    return (
        <>
            {active === 'Calendar' ? <Dashboard /> : active === 'Alarm' ? <Alarm /> : <BoxDoctor />}
            <Footer Active={handleActive} />
        </>
    )
}