import React, { createContext, useContext, useState, useEffect } from 'react';
import { Header } from './header'
import { Current } from './current';
import { Forecast } from './forecast';
import { GlobalColors, GlobalTime } from '../context/contexts';
import { useResponsive } from './responsive';
import { CommonIcons } from './svg/commonIcons';

export const ForecastContext = createContext(null)

export function Home() {
    const { desktop } = useResponsive()
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
            {/* <div style={{ display: 'flex', background: `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`, height: '100vh', width: '100vw', overflow: 'hidden' }}> */}


            <div className='home' style={{
                background: `#6D597A`,
                color: '#fff',
                font: textColor,
                opacity: load ? 1 : 0,
                transition: "opacity 1s ease"
            }}>
                <div className='home-settings' style={{ transform: `translateX(${0}%)` }}>
                    <div className='home-settings-card'>

                        <button onClick={() => { setSettings(!settings) }} className='home-settings-card-close' style={{ fill: textColor }}>
                            <CommonIcons s={20} icon='cross'/>
                        </button>
                        <button onClick={changeLocation} className='home-settings-card-reset'>Reset</button>
                    </div>
                </div>
                <button onClick={() => { setSettings(!settings) }} className='home-settings-btn'>
                    <CommonIcons s={20} icon='settings' />
                </button>
                <div className='home-weather'>
                    <Current />
                    {/* <Header desktop={desktop} changeLocation={changeLocation} />
                    <Forecast /> */}
                </div>

            </div>
            {/* </div> */}


        </ForecastContext.Provider>

    )
}