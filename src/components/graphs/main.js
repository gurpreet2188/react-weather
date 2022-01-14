import React, { useState, useEffect, useContext } from 'react';
import { Graph } from '../svg/graph';
import { GlobalData } from '../../context/contexts';
import { useBase } from './base';

import { useGraphData } from './graphData';

export function Graphs({ type, poly, setPoly }) {
    const { data } = useContext(GlobalData)
    const [dataType, setDataType] = useState(data.hourly)
    const [stat, setStat] = useState(false)
    const [showRain, setShowRain] = useState(true)
    const [showSnow, setShowSnow] = useState(true)
    const [graph, setGraph] = useState("temp")
    const [arr, yLeg, yArr, rain, snow] = useGraphData(dataType, graph)
    const [rSize, setRSize] = useState(4)
    const switchGraph = (type) => {
        setPoly(false)
        setRSize(4)
        setTimeout(
            () => {
                setGraph(type)
                setPoly(true)
            }
            , 300)
    }

    const graphPrec = () => switchGraph("preci")
    const graphRain = () => switchGraph("rain")
    const graphSnow = () => switchGraph("snow")
    const graphHumidity = () => switchGraph("humidity")
    const graphUVI = () => switchGraph("uvi")
    const graphTemp = () => switchGraph("temp")

    useEffect(() => {
        type === 'h' ? setDataType(data.hourly) : setDataType(data.daily)
    }, [type, data])

    useEffect(() => {
        const check = (num) => {
            return num === 0
        }
        if (yArr) {
            setStat(true)
            rain.every(check) ? setShowRain(false) : setShowRain(true)
            snow.every(check) ? setShowSnow(false) : setShowSnow(true)
        }
    }, [yArr, rain, snow])

    const toggleGraphValue = () => {
        if (graph === 'temp' || graph === 'rain' || graph === 'snow' || graph === 'uvi') {
            rSize === 4 ? setRSize(15) : setRSize(4)
        } else {
            rSize === 4 ? setRSize(12) : setRSize(4)
        }
    }

    const [xLegend, yLegend, points, dots, value] = useBase(arr, yArr, yLeg, data, type, rSize)

    return (
        <div className='forecast-data-chart'>
            {stat ? <Graph points={points} axisX={xLegend} axisY={yLegend} show={poly} dots={dots} info={value} click={toggleGraphValue} /> : null}
            <div className='forecast-data-chart-footer'>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "temp" ? "1" : "0.5" }} onClick={graphTemp}>Temp</button>
                {showRain ? <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "rain" ? "1" : "0.5" }} onClick={graphRain}>Rain</button>
                    : null}
                {showSnow ? <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "snow" ? "1" : "0.5" }} onClick={graphSnow}>Snow</button> : null}
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "preci" ? "1" : "0.5" }} onClick={graphPrec}>Preci.</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "humidity" ? "1" : "0.5" }} onClick={graphHumidity}>Humidity</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "uvi" ? "1" : "0.5" }} onClick={graphUVI}>UVI</button>
            </div>
        </div >
    )
}