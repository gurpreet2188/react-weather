import { useContext, useEffect, useState } from "react";
import { GlobalColors } from "../../context/contexts";

export function useBase(arr, yArr, yLeg, data, type, rSize) {
    const { textColor } = useContext(GlobalColors)


    const [yLegend, setYLegend] = useState()
    const [xLegend, setXLegend] = useState()
    const [points, setPoints] = useState()
    const [dots, setDots] = useState()
    const [value, setValue] = useState()

    useEffect(() => {
        const styles = {
            fill: textColor,
            fontSize: ".9rem",
            fontFamily: "'Barlow', serif",
            fontWeight: "100",
            letterSpacing: ".1rem",
            textAlign: 'right',
            transition: 'all .5s ease-in-out',
            textAnchor: 'left'
        }
        const xScale = [46, 82.28, 118.56, 154.84, 191.12, 227.4, 263.68, 299.96]
        const yScale = [5, 55, 105]

        const dates = data.daily?.map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="130">{new Date(m.dt * 1000).getDate()}</text> })
        const hours = data.hourly?.slice(0, 8).map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="130">{new Date(m.dt * 1000).getHours()}</text> })
        if (yArr) {
            setPoints((xScale.map((v, i) => {
                return `${v},${yArr[i]}`
            })).join(" "))
            setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={yArr[i]} r={rSize} /> })))
            setValue((xScale.map((v, i) => {
                return <text
                    dominantBaseline='middle'
                    style={{ fill: textColor }}
                    className={rSize === 4 ? "forecast-data-chart-hide-info" : "forecast-data-chart-show-info"}
                    key={i} x={v}
                    y={yArr[i]}>
                    {arr[i]}</text>
            })))
            setXLegend(type === "h" ? hours : dates)
            setYLegend(yLeg.map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> }))
        }

    }, [arr, yArr, yLeg, rSize, textColor, type, data])

    return [xLegend, yLegend, points, dots, value]
}