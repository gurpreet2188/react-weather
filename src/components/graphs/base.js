import { useContext, useEffect, useState } from "react";
import { GlobalColors } from "../../context/contexts";
import IconAll from "../svg/iconWeather";
import { IconWeatherAll } from "../svg/iconWeatherAll";

export function useBase(arr, yArr, yLeg, data, time, type, icon) {
    const { textColor } = useContext(GlobalColors)


    const [yLegend, setYLegend] = useState()
    const [xLegend, setXLegend] = useState()
    const [points, setPoints] = useState()
    const [dots, setDots] = useState()
    const [value, setValue] = useState()
    const [icons, setIcons] = useState()

    useEffect(() => {
        const styles = {
            fill: textColor,
            fontSize: ".7rem",
            fontFamily: "'Barlow', serif",
            fontWeight: "100",
            letterSpacing: ".1rem",
            transition: 'all .5s ease-in-out',
            textAnchor: 'left',
            opacity: 0.5
        }
        const xScale = [64.28, 99.99, 135.7, 171.41, 207.12, 242.83, 278.54]
        const yScale = [5, 55, 105]

        const dates = data.daily?.slice(0, 7).map((m, i) => { return <text style={styles} textAnchor="middle" key={i} x={xScale[i]} y="-50">{new Date(m.dt * 1000).getDate()}</text> })
        const hours = data.hourly?.slice(0, 7).map((m, i) => {
            return <text style={styles} textAnchor="middle" key={i} x={xScale[i]} y="-50">{(new Date(m.dt * 1000).getHours() > 12) ? new Date(m.dt * 1000).getHours() - 12 + "pm" :
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
                    className="forecast-data-chart-show-info"
                    key={i} x={v}
                    y={yArr[i] > 90 ?  yArr[i] -15 : yArr[i] + 30}>
                    {
                        type === 'temp' ? Math.round(arr[i]) + "\xB0" : type === 'uvi' ?  arr[i] :  arr[i]
                    }</text>
            })))
            setXLegend(time === "h" ? hours : dates)
            setYLegend(yLeg.map((m, i) => { return <text style={styles} key={i} x={0} y={yScale[i]}>{m}</text> }))
            setIcons(icon.map((v, i) => { return <svg x={xScale[i] - 9} y={yArr[i] > 90 ? yArr[i] -50 : yArr[i] -40}  style={{ opacity: 0.5}}><IconWeatherAll key={i} size={18} clouds={v.clouds} rain={v.rain} snow={v.snow} day={v.day} id={v.id} /> </svg> }))
        }

    }, [arr, yArr, yLeg, textColor, time, data, type])

    console.log(yArr)

    return [xLegend, yLegend, points, dots, value, icons]
}