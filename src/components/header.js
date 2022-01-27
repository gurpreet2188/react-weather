import React, { useContext, useEffect, useState } from 'react';
import { GlobalData } from '../context/contexts';
export function Header() {
    const { data } = useContext(GlobalData)
    const name = JSON.parse(localStorage.getItem('name'))
    const cTemp = JSON.parse(localStorage.getItem('countries'))
    const location = JSON.parse(localStorage.getItem('location'))
    const [city, state, countryCode] = [location.city, location.state ? location.state : null, location.country]
    const [country, setCountry] = useState('')
    const current = data.current?.weather[0].main

    useEffect(() => {
        cTemp.data.find(n => n.code === countryCode ? setCountry(n.name) : "")
    }, [cTemp])
    console.log(city)
    return (
        <div className='home-header'>
                <h1 className='header-title'>{city ? city : name.name}</h1>
                {/* <h1 className='header-subtitle'>{state ? state : ""}</h1>
                <h1 className='header-subtitle'>{country}</h1> */}
        </div>
    )

}