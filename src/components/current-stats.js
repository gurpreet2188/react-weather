import React,{useContext, useEffect, useState} from 'react';
import { IconArrow } from './svg/iconDeg';
import { GlobalData, GlobalTime } from '../context/contexts';

export function CurrentStats() {
    const {sun} = useContext(GlobalTime)
    const {data, aqi} = useContext(GlobalData)
    const [airq, setAirq] = useState("")

    useEffect(()=>{
        const airQ = () => {
            const v = aqi?.list[0].main.aqi
            if(v === 1) {setAirq("good")}
            else if ( v === 2) { setAirq("fair")}
            else if ( v === 3) { setAirq("moderate")}
            else if ( v === 4) { setAirq("poor")}
            else if ( v === 5) { setAirq("very poor")}
            else {setAirq("Data Error")}
        }
        airQ()
    },[airq])
    
    return (
        <div className='stats'>
            <div className='stats-col'>
                <div className='stats-text'>
                    <h3 className='stats-text-title'>{data.current?.humidity}%</h3>
                    <h3 className='stats-text-subtitle'>Humidity</h3>
                </div>
                <div className='stats-text'>
                    <h3 className='stats-text-title'>{sun === "sunset" ? data.current?.visibility / 1000 + "km": data.current?.uvi}</h3>
                    <h3 className='stats-text-subtitle'>{sun === "sunset" ? "Visibility": "UVI"}</h3>
                </div>
            </div>
           
             <div className='stats-col'>
             <div className='stats-text'>
                    <h3 className='stats-text-title'><span className=''>{data.current?.wind_speed}m/s</span> <IconArrow w={20} h={20} deg={data.current?.wind_deg} /></h3>
                    <h3 className='stats-text-subtitle'> Wind</h3>
                </div>
                <div className='stats-text'>
                    <h3 className='stats-text-title' style={{ textTransform: 'uppercase' }}>{airq}</h3>
                    <h3 className='stats-text-subtitle'>Air Quality</h3>
                </div>
            </div>
           
           
            {/* <div className='stats-row'>
                <div className='stats-content'>
                    <h3 className='stats-content-title'><span className=''>{data.current?.wind_speed}m/s</span> <IconArrow w={20} h={20} deg={data.current?.wind_deg} /></h3>
                    <h3 className='stats-content-subtitle'> Wind</h3>
                </div>
                <div className='stats-content'>
                    <h3 className='stats-content-title' style={{ textTransform: 'uppercase' }}>{airq}</h3>
                    <h3 className='stats-content-subtitle'>Air Quality</h3>
                </div>
            </div> */}


        </div>
    )
}