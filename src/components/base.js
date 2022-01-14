import React, { useContext, useState, useEffect } from 'react';
import { GlobalColors, GlobalTime } from '../context/contexts';

import { Header } from './header';
import { Home } from './home';

export function Base() {
    const { textColor, hsl } = useContext(GlobalColors)
    const { day } = useContext(GlobalTime)
    const [v, setV] = useState(100)

    useEffect(() => { day ? setV(100) : setV(60) }, [day])

    return (
        <>
            <div className='home' style={{
                background: `linear-gradient(180deg,hsl(${hsl.h},${hsl.s}%,${hsl.l}%)0%, hsl(${hsl.h},${hsl.s}%,${v}%) 100%`,
                color: textColor,
                font: textColor
            }}>
                <Header />
                <Home />
            </div>
        </>

    )
}