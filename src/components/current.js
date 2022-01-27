import React, { useContext, useState } from 'react';
import { GlobalColors, GlobalData, GlobalTime } from '../context/contexts';
import { ForecastContext } from './home';
// import { IconArrowFull } from './svg/fullArrow';
import { IconArrowUpDown } from './svg/iconArrow';
// import IconAll from './svg/iconWeather';
import { IconWeatherAll } from './svg/iconWeatherAll';

export function Current() {
    // const { forecastOpen } = useContext(ForecastContext)
    const { data } = useContext(GlobalData)
    const { day } = useContext(GlobalTime)
    const { textColor, hsl } = useContext(GlobalColors)
    // const [units, setUnits] = useState(true)
    const clouds = data.current?.clouds
    const id = data.current?.weather[0].id
    const rain = data.current?.rain ? true : false
    const snow = data.current?.snow ? true : false
    const tempMax = Math.floor(data.daily[0]?.temp.max)
    const tempMin = Math.floor(data.daily[0]?.temp.min)

    // const onClikcChangeLocation = () => {
    //     localStorage.clear() // clearing all localstorage will automagically reset to the welcome page
    //     window.location.reload(false) // refresh page to actually open the welcome page
    // }

    return (
        <div className='home-card' style={{ background: `hsl(${hsl.h},${hsl.s}%,${hsl.l}%, 60%)`, transition: "all 1s ease-in-out" }}>
            <h3 className='home-card-title'>{data.current?.weather[0].main}</h3>
            <div className='home-card-image'>
                <IconWeatherAll size={100} clouds={clouds} rain={rain} snow={snow} id={id} day={day} />
            </div>
            <div className='home-card-temp' style={{ stroke: textColor }}>
                <div className='home-card-temp-highlow'>
                    <div className='home-card-temp-highlow-high'>
                        <div className='home-card-temp-highlow-high-arrow'>
                            <IconArrowUpDown w={15} />
                        </div>
                            <p>{tempMax}&deg;</p>
                    </div>
                    <div className='home-card-temp-highlow-low'>
                            <p>{tempMin}&deg;</p>
                    <div className='home-card-temp-highlow-low-arrow'>
                            <IconArrowUpDown w={15} />
                        </div>
                    </div>
                </div>
                <div className='home-card-temp-main'>
                    <h1>{Math.floor(data.current?.temp)}&deg;</h1>
                </div>
            </div>
        </div>
    )
}