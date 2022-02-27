import React, { useContext, useEffect, useState } from 'react';
import { useResponsive } from './responsive';
import { GlobalColors, GlobalData } from '../context/contexts';

export function Header({ desktop, changeLocation }) {
    const { data } = useContext(GlobalData)
    const { textColor, hsl, hslSec } = useContext(GlobalColors)
    const name = JSON.parse(localStorage.getItem('name'))
    const cTemp = JSON.parse(localStorage.getItem('countries'))
    const location = JSON.parse(localStorage.getItem('location'))
    const [city, state, countryCode] = [location.city, location.state ? location.state : null, location.country]
    const [country, setCountry] = useState('')
    const current = data.current?.weather[0].main

    useEffect(() => {
        cTemp.data.find(n => n.code === countryCode ? setCountry(n.name) : "")
    }, [cTemp])

    const titleStyles = {
        background: `hsl(${hslSec.h},${hslSec.s}%,${hslSec.l}%, 30%)`,
        opacity: 1,
        borderRadius: '1rem',
        boxShadow: '4px 4px 15px rgba(0,0,0,0.1)',
        padding: '1rem 1rem 1rem calc(100vw / 10)',
    }

    if (desktop) {
        console.log('desktop')
        return (
            <div className='home-header'>
                <h1 style={titleStyles}>{city ? city : name.name}</h1>
                {/* <h1 className='header-subtitle'>{state ? state : ""}</h1>
                    <h1 className='header-subtitle'>{country}</h1> */}
                    <button onClick={changeLocation} className='home-header-reset' style={{ color: textColor }}>Reset</button>
            </div>
        )
    } else {
        return (
            <div className='home-header'>
                <h1 style={desktop ? titleStyles : null}>{city ? city : name.name}</h1>
            </div>
        )
    }


}