import React, { useContext, useEffect, useState } from 'react';
import { IconChart } from '../assets/icon-components/chart';
import { IconArrowUpDown } from '../assets/icon-components/arrowUpDown'
import { globalData } from './base';
import { Current } from './current';
import { CurrentStats } from './current-stats';
import { Forecast } from './forecast';
import { Graphs } from './graphs'
export function Home() {
    const [panel, setPanel] = useState(false)
    const [time, setTime] = useState("h")
    const [graph, setGraph] = useState("temp")
    const [graphs, setGraphs] = useState(false)
    const [poly, setPoly] = useState(false)
    const { textColor } = useContext(globalData)
    const togglePanel = () => !panel ? setPanel(true) : setPanel(false)
    const toggleGraphs = () => {
        !graphs ? setGraphs(true) : setGraphs(false)
        setPoly(true)
    }
    const switchType = () => { time === "h" ? setTime("d") : setTime("h") }
    const graphRain = () => {
        setPoly(false)

        setTimeout(
            () => {
                setGraph("rain")
                setPoly(true)
            }
            , 100)
    }
    const graphHumidity = () => {
        setPoly(false)

        setTimeout(
            () => {
                setGraph("humidity")
                setPoly(true)
            }
            , 100)
    }
    const graphUVI = () => {
        setPoly(false)

        setTimeout(
            () => {
                setGraph("uvi")
                setPoly(true)
            }
            , 100)
    }
    const graphTemp = () => {
        setPoly(false)

        setTimeout(
            () => {
                setGraph("temp")
                setPoly(true)
            }
            , 100)
    }

    return (
        <>
            <Current />
            <div className={!panel ? "show-stats" : "hide-stats"} style={{ transition: 'all .5s ease' }}>
                <CurrentStats />
            </div>
            <div className={panel ? "forecast-panel forecast-up" : "forecast-panel forecast-down"} style={{ color: textColor, transition: 'all .5s ease' }}>
                <button onClick={togglePanel} className={panel ? "forecast-text forecast-icon-opened " : "forecast-text forecast-icon-closed "} style={{ color: textColor, transition: 'all .5s ease' }}>
                    <div className={panel ? "forecast-icon-small" : "forecast-icon-large"} style={{ color: textColor, transition: 'all .5s ease' }}><IconArrowUpDown w={18} h={18} /></div>
                    <h3>forecast</h3>
                </button>
                <div className={panel ? "show-forecast" : "hide-forecast"} style={{ transition: 'all .5s ease' }}>
                    <div className="forecast-header">

                        <a href="#" className="forecast-select" onClick={switchType} style={{ color: textColor }}>
                            <h3 className={time === "h" ? "forecast-selected forecast-select" : "forecast-not-selected"}>Hourly</h3>
                            <h3 className={time === "d" ? "forecast-selected" : "forecast-not-selected"}>Daily</h3>
                        </a>
                        <div className='forecast-chart-icon' onClick={toggleGraphs} style={{ color: textColor, transition: 'all .5s ease', opacity: graphs? ".8":".4" }}>
                            <IconChart w={24} h={24} />
                        </div>
                    </div>
                    <div style={{ display: !graphs ? "" : "none" }} >
                        <Forecast type={time} />
                    </div>
                    <div style={{ display: graphs ? "" : "none" }} className='graphs'>
                        <Graphs time={time} type={graph} show={poly} />
                        <div className='graph-footer forecast-content-text'>
                            <button className={graph === "temp" ? "forecast-selected" : "forecast-not-selected"} onClick={graphTemp}>Temp</button>
                            <button className={graph === "rain" ? "forecast-selected" : "forecast-not-selected"} onClick={graphRain}>Preci. </button>
                            <button className={graph === "humidity" ? "forecast-selected" : "forecast-not-selected"} onClick={graphHumidity}>Humidity </button>
                            <button className={graph === "uvi" ? "forecast-selected" : "forecast-not-selected"} onClick={graphUVI}>UVI </button>

                        </div>
                    </div>

                </div>
            </div>


        </>

    )
}