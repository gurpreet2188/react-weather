import React, { useContext, useState } from 'react';
import { globalData } from './base';
import { Current } from './current';
import { Forecast } from './forecast';
import { Graphs } from './graphs'
export function Home() {
    const [panel, setPanel] = useState(false)
    const [type, setType] = useState("h")
    const {textColor} = useContext(globalData)
    const togglePanel = () => {
        !panel ? setPanel(true) : setPanel(false)
    }
    console.log(panel)
    const switchType = () => { type === "h" ? setType("d") : setType("h") }
    return (
        <>
            <Current />
            <div className="forecast-header">
            <a href='#' className='forecast-style-select' style={{color:textColor}}>Forecast </a>
                    <a href='#' className={panel ? "forecast-style-select forecast-selected" : " forecast-style-select forecast-not-selected"}  style={{color:textColor}} onClick={togglePanel}> Graphs</a>
                <div className="forecast-select" onClick={switchType}>
                    <h3 className={type === "h" ? "forecast-selected" : "forecast-not-selected"}>Hourly</h3>
                    <h3 className={type === "d" ? "forecast-selected" : "forecast-not-selected"}>Daily</h3>
                </div>
            </div>
            <div style={panel ? { display: 'none' } : {}}>
                <Forecast type={type}/>

            </div>
            <div style={!panel ? { display: 'none' } : {}}>
                <Graphs type={type}/>
            </div>
            {/* <div className='forecast-bottom-selection'>
                <h3 className='forecast-title'>Forecast Style </h3>
                <div className='forecast-style-selection'>
                    <a href='#' className='forecast-style-select' onClick={togglePanel}>Normal </a>
                    <a href='#' className='forecast-style-select' onClick={togglePanel}> Graphs</a>
                </div>

            </div> */}

        </>

    )
}