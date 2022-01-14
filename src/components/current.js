import React, { useContext } from 'react';
import { GlobalData, GlobalTime } from '../context/contexts';
import IconAll from './svg/iconWeather';

export function Current() {
    const size = { w: "52%", h: "45%" }
    const { data } = useContext(GlobalData)
    const { day } = useContext(GlobalTime)
    const fontSize = data.current?.weather[0].description.length > 18 ? "1.1rem" : "1.4rem"
    const clouds = data.current?.clouds
    const id = data.current?.weather[0].id
    const rain = data.current?.rain ? true : false
    return (
        <div className='current'>
            <div className='current-weather'>
                <div className='current-weather-image'>
                    <IconAll size={size.w} rain={rain} clouds={clouds} id={id} day={day} anim={true} />
                </div>
                <div className='current-weather-text'>
                    <h1 className='current-weather-text-temp'>{parseInt(data.current?.temp)}&deg;</h1>
                    <h3 className='current-weather-text-temp2'>Feels Like: <span className='current-value'>{parseInt(data.current?.feels_like)}&deg;</span></h3>
                    <h3 className='current-weather-text-condition' style={{ fontSize: fontSize }} >{data.current?.weather[0].description}</h3>
                </div>
            </div>
        </div>
    )
}