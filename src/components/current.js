import React, { useContext, useEffect } from 'react';
import { IconClouded } from '../assets/icon-components/clouded';
import { IconCloudedSun } from '../assets/icon-components/cloudedSun'
import { IconArrow } from '../assets/icon-components/arrow'
import { IconSun } from '../assets/icon-components/sun';
import { globalData } from './base';
export function Current() {
    const size = { w: 125, h: 125 }
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
    const clouds = data?.current?.clouds
    // if(data.daily?.)
    // console.log(data.hourly[0])
    // for(let i =0; i < 48; i++) {
    //     if(data.hourly[i]) {
    //         console.log(new Date(data.hourly[i].dt * 1000).getHours())
    //     }
    // }

    useEffect(() => {
        if (clouds > 50 && (current_time > sunrise.getTime() && current_time < sunset.getTime())) {
            setRed(200)
            setGreen(240)
            setBlue(255)
        } else if (clouds < 50 && (current_time > sunrise.getTime() && current_time < sunset.getTime())) {
            setRed(150)
            setGreen(255)
            setBlue(255)
        }
    })

    return (
        <div className='content-flex'>
            <div className='weather'>
                <div className='weather-image'>
                {data.current?.clouds >= 75 ? <IconClouded w={size.w} h={size.h} anim={true} /> : 
                                (data.current?.clouds >= 26 && data.current?.clouds <= 74) ? <IconCloudedSun w={size.w} h={size.h} anim={true}/> :
                                (data.current?.clouds <= 25 && data.current?.clouds >= 0) ? <IconSun w={size.w} h={size.h} anim={true}/> :""}
                </div>
                <div className='weather-text'>
                    <h1 className='weather-text-title'>{parseInt(data.current?.temp)}&deg;</h1>
                    <h3 className='weather-text-subtitle'>Feels Like: <span className='current-value'>{parseInt(data.current?.feels_like)}&deg;</span></h3>
                    <h3 className='weather-text-condition'>{data.current?.weather[0].description}</h3>
                </div>
            </div>
            <div className='current-stats'>
                <div className='stats-col1'>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'>{data.current?.humidity}%</h3>
                        <h3 className='stats-content-subtitle'>Humidity</h3>
                    </div>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'>{data.current?.uvi}</h3>
                        <h3 className='stats-content-subtitle'>UVI</h3>
                    </div>
                </div>
                <div className='stats-col2'>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'><span className=''>{data.current?.wind_speed}m/s</span> <IconArrow w={20} h={20} deg={data.current?.wind_deg} /></h3>
                        <h3 className='stats-content-subtitle'> Wind</h3>
                    </div>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'>{data.current?.pressure}hPa</h3>
                        <h3 className='stats-content-subtitle'>Pressure</h3>
                    </div>
                </div>


            </div>



        </div>
    )
}