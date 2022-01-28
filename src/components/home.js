import React, { createContext, useContext, useState, useEffect } from 'react';
import { Header } from './header'
import { IconArrowUpDown } from './svg/iconArrow'
import { Current } from './current';
import { CurrentStats } from './current-stats';
import { Forecast } from './forecast';
import { GlobalColors, GlobalTime } from '../context/contexts';
import { IconSettings } from './svg/iconSettings';
import { IconCross } from './svg/iconCross';

export const ForecastContext = createContext(null)

export function Home() {
    const [forecastOpen, setForecastOpen] = useState(false)
    const { textColor, hsl, hslSec } = useContext(GlobalColors)
    const { day } = useContext(GlobalTime)
    const [v, setV] = useState(100)
    const [load, setLoad] = useState(false)
    const [settings, setSettings] = useState(false)

    useEffect(() => { day ? setV(100) : setV(60) }, [day])
    useEffect(() => {
        setTimeout(() => { setLoad(true) }, 1)
    }, [])

    const changeLocation = () => {
        localStorage.clear()
        window.location.reload(false)
    }

    return (
        <ForecastContext.Provider value={{ forecastOpen, setForecastOpen }}>
            <div className='home-settings' style={{ transform: `translateX(${settings ? 50 : 200}%)`, background: `hsl(${hsl.h},${hsl.s}%,${hsl.l}%, 95%)`}}>
                <button onClick={() => { setSettings(!settings) }} className='home-settings-closebtn' style={{fill: textColor}}>
                    <IconCross s={15}/>
                </button>
                <div className='home-settings-location'>
                    <button onClick={changeLocation} className='home-settings-location-btn' style={{color: textColor}}>Change current City.</button>
                </div>
            </div>
            <div className='home' style={{
                background: `linear-gradient(168.63deg, hsl(${hsl.h},${hsl.s}%,${hsl.l}%)0%, hsl(${hslSec.h},${hslSec.s}%,${hslSec.l}%) 99.26%)`,
                color: textColor,
                font: textColor,
                opacity: load ? 1 : 0,
                transition: "opacity 1s ease"
            }}>
                <button onClick={() => { setSettings(!settings) }} className='home-settings-btn'>
                    <IconSettings s={15} />
                </button>
                <Header />
                <Current />
                <div className='home-forecast'>
                    <Forecast />
                </div>
            </div>


        </ForecastContext.Provider>

    )
}