import React, { useContext, useState } from 'react';
import { GlobalColors, GlobalData, GlobalTime } from '../context/contexts';
import { ForecastContext } from './home';
import { useResponsive } from './responsive';
import { CommonIcons } from './svg/commonIcons';
import { IconWeatherAll } from './svg/iconWeatherAll';

export function Current() {
    // const { forecastOpen } = useContext(ForecastContext)
    const { data } = useContext(GlobalData)
    const { day } = useContext(GlobalTime)
    const { textColor, hsl } = useContext(GlobalColors)
    const {iconSize, weatherIconSize, desktop} = useResponsive()
    // const [units, setUnits] = useState(true)
    const clouds = data.current?.clouds
    const id = data.current?.weather[0].id
    const rain = data.current?.rain ? true : false
    const snow = data.current?.snow ? true : false
    const tempMax = Math.floor(data.daily[0]?.temp.max)
    const tempMin = Math.floor(data.daily[0]?.temp.min)
    const {aqi} = useContext(GlobalData) 
    const aq = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor']

    // const onClikcChangeLocation = () => {
    //     localStorage.clear() // clearing all localstorage will automagically reset to the welcome page
    //     window.location.reload(false) // refresh page to actually open the welcome page
    // }

    return (
        <div>
            
        </div>
    )
}