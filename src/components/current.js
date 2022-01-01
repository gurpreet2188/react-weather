import React, { useContext } from 'react';
import { IconClouded } from '../assets/icon-components/clouded';
import { IconCloudedSun } from '../assets/icon-components/cloudedSun'
import { IconSun } from '../assets/icon-components/sun';
import { GlobalData, GlobalTime } from '../context/contexts';
import IconAll from './svg/iconWeather';

export function Current() {
    const size = { w: "52%", h: "45%" }
    const {data} = useContext(GlobalData)
    const {sun} = useContext(GlobalTime)
    // console.log(data)
    const date = new Date()

    const fontSize = data.current?.weather[0].description.length > 18 ? "1.1rem" : "1.4rem"
    const clouds = data.current?.clouds
    const id = data.current?.weather[0].id
    const rain = data.current?.rain ? true : false
    return (
        <div className='current'>
            <div className='current-weather'>
                <div className='current-weather-image'>
                    {/* {data.current?.clouds >= 75 ? <IconClouded w={size.w} h={size.h} anim={false} /> :
                        (data.current?.clouds >= 26 && data.current?.clouds <= 74) ? <IconCloudedSun w={size.w} h={size.h} anim={false} /> :
                            (data.current?.clouds <= 25 && data.current?.clouds >= 0) ? <IconSun w={size.w} h={size.h} anim={false} /> : ""} */}
                            <IconAll size={size.w} rain={rain} clouds={clouds} id ={id} sun={sun} anim={true}/>
                </div>
                <div className='current-weather-text'>
                    <h1 className='current-weather-text-temp'>{parseInt(data.current?.temp)}&deg;</h1>
                    <h3 className='current-weather-text-temp2'>Feels Like: <span className='current-value'>{parseInt(data.current?.feels_like)}&deg;</span></h3>
                    <h3 className='current-weather-text-condition' style={{ fontSize: fontSize }} >{data.current?.weather[0].description}</h3>
                </div>
            </div>
            {/* <div className='current-stats'>
                <div className='stats-col1'>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'>{data.current?.humidity}%</h3>
                        <h3 className='stats-content-subtitle'>Humidity</h3>
                    </div>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'>{!vis ? data.current?.uvi : data.current?.visibility / 1000 + "km"}</h3>
                        <h3 className='stats-content-subtitle'>{!vis ? "UVI" : "visibility"}</h3>
                    </div>
                </div>
                <div className='stats-col2'>
                    <div className='stats-content'>
                        <h3 className='stats-content-title'><span className=''>{data.current?.wind_speed}m/s</span> <IconArrow w={20} h={20} deg={data.current?.wind_deg} /></h3>
                        <h3 className='stats-content-subtitle'> Wind</h3>
                    </div>
                    <div className='stats-content'>
                        <h3 className='stats-content-title' style={{textTransform:'uppercase'}}>{airq}</h3>
                        <h3 className='stats-content-subtitle'>Air Quality</h3>
                    </div>
                </div>


            </div> */}



        </div>
    )
}