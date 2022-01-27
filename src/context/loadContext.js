import React from 'react';
import { Colors } from './colors';
import { Time } from './duration';
import { GlobalData, GlobalColors, GlobalTime } from './contexts';
import { Home } from '../components/home';

export function LoadContext() {
    const data = JSON.parse(localStorage.getItem('main'))
    const aqi = JSON.parse(localStorage.getItem('air'))
    const name = JSON.parse(localStorage.getItem('name'))
    const { sunrise, day } = Time(data)
    const { textColor, hsl, hslSec } = Colors(sunrise, day)
    return (
        <>
            <GlobalData.Provider value={{ data, name, aqi }}>
                <GlobalTime.Provider value={{ day }}>
                    <GlobalColors.Provider value={{ textColor, hsl, hslSec }}>
                        <Home />
                    </GlobalColors.Provider>
                </GlobalTime.Provider>
            </GlobalData.Provider>
        </>
    )
}