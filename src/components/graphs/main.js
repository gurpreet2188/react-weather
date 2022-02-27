import React, { useState, useEffect, useContext } from 'react';
import { Graph } from '../svg/graph';
import { GlobalData } from '../../context/contexts';
import { useBase } from './base';

import { useGraphData } from './graphData';

export function Graphs({ type, poly, setPoly, setShowSnow, setShowRain, graph }) {
    const { data } = useContext(GlobalData)
    const [dataType, setDataType] = useState(data.hourly)
    const [stat, setStat] = useState(false)
    const [arr, yLeg, yArr, rain, snow, icon, windDeg, pArr, pYArr] = useGraphData(dataType, graph)

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

    const [xLegend, yLegend, points, dots, value, icons, pBar, pValue] = useBase(arr, yArr, yLeg, data, type, graph, icon, windDeg, pArr, pYArr)
    return (
        <div className='forecast-data-chart'>
            {stat ? <Graph points={points} axisX={xLegend} axisY={yLegend} show={poly} dots={dots} info={value} icon={icons} graph={graph} snowRain={pBar} pValue={pValue} /> : null}
        </div >
    )
}