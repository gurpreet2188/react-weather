import React, { useContext, useEffect, useState } from 'react';
import { globalData } from './base';
import { Current } from './current';
import { Forecast } from './forecast';
import { Graphs } from './graphs'
export function Home() {
    const [panel, setPanel] = useState(false)
    const [time, setTime] = useState("h")
    const [graph, setGraph] = useState("temp")
    const { textColor } = useContext(globalData)
    const togglePanel = () => {
        !panel ? setPanel(true) : setPanel(false)
    }
    console.log(panel)
    const switchType = () => { time === "h" ? setTime("d") : setTime("h") }

    const graphRain = () => setGraph("rain")
    const graphHumidity = () => setGraph("humidity")
    const graphUVI = () => setGraph("uvi")
    const graphTemp = () => setGraph("temp")
    return (
        <>
            <Current />
            <div className="forecast-header">
                <a href='#' className='forecast-style-select' style={{ color: textColor }}>Forecast </a>
                <a href='#' className={panel ? "forecast-style-select forecast-selected" : " forecast-style-select forecast-not-selected"} style={{ color: textColor }} onClick={togglePanel}> Graphs</a>
                <div className="forecast-select" onClick={switchType}>
                    <h3 className={time === "h" ? "forecast-selected" : "forecast-not-selected"}>Hourly</h3>
                    <h3 className={time === "d" ? "forecast-selected" : "forecast-not-selected"}>Daily</h3>
                </div>
            </div>
            <div style={panel ? { display: 'none' } : {}}>
                <Forecast type={time} />

            </div>
            <div className='graphs' style={!panel ? { display: 'none' } : {}}>
                <Graphs time={time} type={graph} />
                <div className='graph-footer forecast-content-text'>
                    <p className={graph === "rain" ? "forecast-selected": "forecast-not-selected"} onClick={graphRain}>Rain </p>
                    <p className={graph === "humidity" ? "forecast-selected": "forecast-not-selected"} onClick={graphHumidity}>Humidity </p>
                    <p className={graph === "uvi" ? "forecast-selected": "forecast-not-selected"} onClick={graphUVI}>UVI </p>
                    <p className={graph === "temp" ? "forecast-selected": "forecast-not-selected"} onClick={graphTemp}>Temp</p>

                </div>
            </div>

        </>

    )
}