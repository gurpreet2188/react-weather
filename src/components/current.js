import React, { useContext, useEffect } from 'react';
import { IconClouded } from '../assets/icon-components/clouded';
import { IconCloudedSun } from '../assets/icon-components/cloudedSun'
import { IconArrow } from '../assets/icon-components/arrow'
import { globalData } from './base';
export function Current() {
    const size = { w: 230, h: 230 }
    // const windDirection = (deg) => {
    //     console.log('test')
    //     if(deg === 0) {
    //         return "North"
    //     } else if (deg > 0 && deg < 90) {
    //         return "NE"
    //     } else if (deg === 90) {
    //         return "East"
    //     } else if (deg > 90 && deg < 180) {
    //         return "SE"
    //     } else if (deg === 180) {
    //         return "South"
    //     } else if (deg > 180 && deg < 270) {
    //         return "SW"
    //     } else if (deg === 270) {
    //         return "West"
    //     } else if (deg > 270 && deg <360) {
    //         return "NW"
    //     } else {
    //         return "wut"
    //     }
    // }

    const { setRed, setBlue, setGreen } = useContext(globalData)
    const data = JSON.parse((localStorage.getItem('ow_api')))
    console.log(data)
    const sunrise = new Date(data.current?.sunrise)
    const sunset = new Date(data.current?.sunset)
    const date = new Date()
    const current_time = Math.round(date.getTime() / 1000)
    const clouds = 48//data?.current?.clouds


    useEffect(() => {
        if (clouds > 50 && (current_time > sunrise.getTime() && current_time < sunset.getTime())) {
            setRed(239)
            setGreen(248)
            setBlue(255)
        } else if (clouds < 50 && (current_time > sunrise.getTime() && current_time < sunset.getTime())) {
            setRed(222)
            setGreen(255)
            setBlue(255)
        }
    })

    return (
        <div className='content-flex'>
            <div className='weather-icon-home'>
                {(data?.current?.clouds > 50) ? <IconClouded w={size.w} h={size.h} /> :
                    (data?.current?.clouds > 25 && data?.current?.clouds < 50) ? <IconCloudedSun w={size.w} h={size.h} /> : "wut"}
            </div>
            <h1 className='current-temp'>{parseInt(data.current?.temp)}&deg;C</h1>
            <h3 className='current-condition'>{data.current?.weather[0].description}</h3>
            <h3 className='current-condition-extra'>Humidity: <span className='current-value'>{data.current?.humidity}%</span></h3>
            <h3 className='current-condition-extra'> Wind: <span className='current-value'>{data.current?.wind_speed}m/s</span> <IconArrow w={18} h={18} deg={data.current?.wind_deg} /></h3>
            <h3 className='current-condition-extra'>Feels Like: <span className='current-value'>{parseInt(data.current?.feels_like)}&deg;C</span></h3>
            <h3 className='current-condition-extra'>Pressure: <span className='current-value'>{data.current?.pressure}hPa</span></h3>

        </div>
    )
}