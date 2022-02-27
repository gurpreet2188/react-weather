import { useContext, useEffect, useState } from "react";
import { GlobalColors } from "../../context/contexts";
import { useResponsive } from "../responsive";
import { CommonIcons } from "../svg/commonIcons";
import { IconWeatherAll } from "../svg/iconWeatherAll";

export function useBase(arr, yArr, yLeg, data, time, type, icon, windDeg, pArr, pYArr) {
    const { textColor } = useContext(GlobalColors)
    const { desktop } = useResponsive()
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    const [yLegend, setYLegend] = useState()
    const [xLegend, setXLegend] = useState()
    const [points, setPoints] = useState()
    const [dots, setDots] = useState()
    const [value, setValue] = useState()
    const [icons, setIcons] = useState()
    const [pBar, setPBar] = useState()
    const [pValue, setPValue] = useState()
    // console.log(desktop)
    useEffect(() => {
        const styles = {
            fill: textColor
        }
        // [64.28, 99.99, 135.7, 171.41, 207.12, 242.83, 278.54]
        const xScale = [15, 60, 105, 150, 195, 240, 285]
        const yScale = [5, 55, 105]

        const dates = data.daily?.slice(0, 7).map((m, i) => { return <text className="forecast-data-chart-main" style={styles} textAnchor="middle" key={i} x={xScale[i]} y="-50">{ new Date(m.dt * 1000).getDay() === new Date().getDay() ? "Today" : days[new Date(m.dt * 1000).getDay()]}</text> })
        const hours = data.hourly?.slice(0, 7).map((m, i) => {
            return <text className="forecast-data-chart-main" style={styles} textAnchor="middle" key={i} x={xScale[i]} y="-50">{(new Date(m.dt * 1000).getHours() > 12) ? new Date(m.dt * 1000).getHours() - 12 + "pm" :
                new Date(m.dt * 1000).getHours() === 0 ? 12 + "am" :
                    new Date(m.dt * 1000).getHours() === 12 ? 12 + "pm" :
                        new Date(m.dt * 1000).getHours() + "am"}</text>
        })
        if (yArr) {
            setPoints((xScale.map((v, i) => {
                return `${v},${yArr[i]}`
            })).join(" "))
            setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={yArr[i]} r={1.5} /> })))
            setValue((xScale.map((v, i) => {
                return <text
                    dominantBaseline='middle'
                    style={styles}
                    className="forecast-data-chart-main"
                    key={i} x={v}
                    y={(type === 'rain' || type === 'snow') ? -10 : yArr[i] >= 75 ? yArr[i] - 15 : yArr[i] + 30}>
                    {
                        type === 'temp' ? Math.round(arr[i]) + "\xB0" : type === 'uvi' ? arr[i] : arr[i]
                    }</text>
            })))
            setXLegend(time === "h" ? hours : dates)
            setYLegend(yLeg.map((m, i) => { return <text className="forecast-data-chart-main" style={styles} key={i} x={0} y={yScale[i]}>{m}</text> }))
            setIcons(
                type === 'wind' ? windDeg.map((v, i) => {
                    return <svg key={i} x={xScale[i] - 9} y={yArr[i] >= 75 ? yArr[i] - 50 : yArr[i] - 40} style={{ opacity: 0.3 }}>
                        <CommonIcons s={18} deg={v}/> </svg>
                }) : (type !== 'rain' && type !== 'snow') ? icon.map((v, i) => {
                    return <svg key={i} x={xScale[i] - 9} y={yArr[i] >= 75 ? yArr[i] - 50 : yArr[i] - 40} style={{ opacity: 0.5 }}>
                        <IconWeatherAll key={i} size={18} clouds={v.clouds} rain={v.rain} snow={v.snow} day={v.day} id={v.id} /> </svg>
                }) : null)
        }
        if (pYArr) {

            if (type === 'snow' || type === 'rain') {
                setPBar(
                    pYArr.map((v, i) => {
                        return <line key={i} fill="none"
                            stroke={textColor}
                            strokeWidth="0.4"
                            opacity={0.3} x1={xScale[i]} x2={xScale[i]} y1={v} y2={100}></line>

                    })
                )

                setPValue(
                    pArr.map((v, i) => {
                        return <text
                            key={i}
                            dominantBaseline='middle'
                            style={{...styles, fontSize: '0.6rem'}}
                            className="forecast-data-chart-main"
                            x={xScale[i]}
                            y={110}
                        >{v}%</text>
                    })
                )
            }


        }

    }, [arr, yArr, yLeg, textColor, time, data, type, desktop, pArr, pYArr])
    console.log('ue', pYArr)

    return [xLegend, yLegend, points, dots, value, icons, pBar, pValue]
}