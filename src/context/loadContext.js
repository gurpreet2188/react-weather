import React, { createContext, useState } from 'react';
import { Base } from '../components/base';
import { Colors} from './colors';
import { Time } from './duration';
import { GlobalData, GlobalColors, GlobalTime } from './contexts';

// export const GlobalData = createContext(null)

export function LoadContext({ date }) {
    const data = JSON.parse(localStorage.getItem('main'))
    const aqi = JSON.parse(localStorage.getItem('air'))
    const name = JSON.parse(localStorage.getItem('name'))
    const { sun } = Time(date, data)
    const { textColor, hsl} = Colors(sun, data)
    return (
        <>
            <GlobalData.Provider value={{ data, name, aqi }}>
                <GlobalTime.Provider value={{ sun }}>
                    <GlobalColors.Provider value={{textColor, hsl}}>
                        <Base />
                    </GlobalColors.Provider>
                </GlobalTime.Provider>
            </GlobalData.Provider>
        </>
    )
}