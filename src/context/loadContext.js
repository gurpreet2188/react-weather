import React from 'react';
import { Base } from '../components/base';
import { Colors } from './colors';
import { Time } from './duration';
import { GlobalData, GlobalColors, GlobalTime } from './contexts';

export function LoadContext() {
    const data = JSON.parse(localStorage.getItem('main'))
    const aqi = JSON.parse(localStorage.getItem('air'))
    const name = JSON.parse(localStorage.getItem('name'))
    const { sunrise, day } = Time(data)
    const { textColor, hsl } = Colors(sunrise, day)
    return (
        <>
            <GlobalData.Provider value={{ data, name, aqi }}>
                <GlobalTime.Provider value={{ day }}>
                    <GlobalColors.Provider value={{ textColor, hsl }}>
                        <Base />
                    </GlobalColors.Provider>
                </GlobalTime.Provider>
            </GlobalData.Provider>
        </>
    )
}