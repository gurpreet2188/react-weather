import React, { useEffect, useState, useContext } from 'react';
import { Graph } from './svg/graph';
import { GlobalColors, GlobalData } from '../context/contexts';

export function Graphs({ type, setPoly, poly, days }) {
    const { textColor } = useContext(GlobalColors)
    const styles = {
        fill: textColor,
        fontSize: ".9rem",
        fontFamily: "'Barlow', serif",
        fontWeight: "100",
        letterSpacing: ".1rem",
        textAlign: 'right',
        transition: 'all .5s ease-in-out'
    }

    const [maxTemp, setMaxTemp] = useState(35)
    const { data } = useContext(GlobalData)
    const [dType, setDType] = useState(data.hourly)
    const [points, setPoints] = useState("")
    const [dots, setDots] = useState("")
    const [text, setText] = useState("")
    const xScale = [46, 82.28, 118.56, 154.84, 191.12, 227.4, 263.68, 299.96]
    const yScale = [1, 50, 100]
    // const tempt = [12, 2, 4, 12, 10, 0, 7, 100]
    const pctY = ["100%", "50%", "0%"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const tempMax = Math.max(...dType.map(m => { return 10 + (m.temp.day ? m.temp.day : m.temp) })).toFixed(0)
    const tempRange = [tempMax, (tempMax / 2).toFixed(0), 0]
    const uviY = ["12", "5", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const tempY = tempRange.map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const dates = data.daily?.map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="120">{new Date(m.dt * 1000).getDay()}</text> })
    const hours = data.hourly?.slice(0, 8).map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="120">{new Date(m.dt * 1000).getHours()}</text> })

    const [graph, setGraph] = useState("temp")

    const switchGraph = (type) => {
        setPoly(false)
        setTimeout(
            () => {
                setGraph(type)
                setPoly(true)
            }
            , 300)
    }
    const graphPrec = () => switchGraph("prec")
    const graphHumidity = () => switchGraph("humidity")
    const graphUVI = () => switchGraph("uvi")
    const graphTemp = () => switchGraph("temp")

    const [rSize, setRSize] = useState(4)
    const [infoStyle, setInfoStyle] = useState(false)

    const [calc, setCalc] = useState()

    const onHover = () => {
        setRSize(rSize === 4 ? 15 : 4)
        setInfoStyle(!infoStyle)
        const time = setTimeout(() => {
            setRSize(4)
            setInfoStyle(false)
        }, 8000)
    }

    // const calcGraph = (v) => {
    //     setCalc(100 - (100 * v))
    //     return calc
    // }


    useEffect(() => {
        type === 'h' ? setDType(data.hourly) : setDType(data.daily)
    }, [type])

    useEffect(() => {

        switch (graph) {
            case "prec":
                setPoints((xScale.map((v, i) => {
                    return `${v},${100 - (100 * dType[i].pop)}`
                })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={100 - (100 * dType[i].pop)} r={rSize} /> })))
                setText((xScale.map((v, i) => {
                    return <text onClick={() => { onHover() }}
                        dominantBaseline='middle'
                        style={{ transition: 'all .5s ease-in-out', fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - (100 * dType[i].pop)}>
                        {(100 * dType[i].pop).toFixed(0)}</text>
                })))

                break;
            case "humidity":
                setPoints((xScale.map((v, i) => { return `${v},${100 - dType[i].humidity}` })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={100 - dType[i].humidity} r={rSize} /> })))
                setText((xScale.map((v, i) => {
                    return <text onClick={() => { onHover() }}
                        dominantBaseline='middle'
                        style={{ transition: 'all .5s ease-in-out', fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - dType[i].humidity}>
                        {parseInt(dType[i].humidity)}</text>
                })))
                break
            case "uvi":
                setPoints((xScale.map((v, i) => { return `${v},${100 - (dType[i].uvi * 8.333)}` })).join(" "))
                setDots((xScale.map((v, i) => {
                    return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} onClick={() => { onHover() }} id="sun" cx={v}
                        cy={100 - (dType[i].uvi * 8.333)} r={rSize} />
                })))
                setText((xScale.map((v, i) => {
                    return <text onClick={() => { onHover() }}
                        dominantBaseline='middle'
                        style={{ transition: 'all .5s ease-in-out', fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - (dType[i].uvi * 8.333)}>
                        {parseInt(dType[i].uvi)}</text>
                })))
                break
            case "temp":
                setPoints((xScale.map((v, i) => {
                    return `${v},
                ${100 - ((dType[i].temp.day ? dType[i].temp.day : dType[i].temp) * (100 / tempRange[0]))}`
                })).join(" "))
                setDots((xScale.map((v, i) => {
                    return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} onClick={() => { onHover() }} id="sun" cx={v}
                        cy={100 - ((dType[i].temp.day ? dType[i].temp.day : dType[i].temp) * (100 / tempRange[0]))} r={rSize} />
                })))
                setText((xScale.map((v, i) => {
                    return <text onClick={() => { onHover() }}
                        dominantBaseline='middle'
                        style={{ transition: 'all .5s ease-in-out', fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - ((dType[i].temp.day ? dType[i].temp.day : dType[i].temp) * (100 / tempRange[0]))}>
                        {parseInt(dType[i].temp.day ? dType[i].temp.day : dType[i].temp)}</text>
                })))
                break
            default:
                break;
        }
    }, [graph, dType, rSize, infoStyle, calc])
    //
    return (
        <div className='forecast-data-chart'>
            <Graph points={points} axisX={type === "d" ? dates : hours} axisY={graph === "uvi" ? uviY : graph === "temp" ? tempY : pctY} show={poly} dots={dots} info={text} />
            <div className='forecast-data-chart-footer'>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "temp" ? "1" : "0.5" }} onClick={graphTemp}>Temp</button>
                {/* <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "rain" ? "1" : "0.5" }} onClick={graphPrec}>Rain</button> */}
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "prec" ? "1" : "0.5" }} onClick={graphPrec}>Preci.</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "humidity" ? "1" : "0.5" }} onClick={graphHumidity}>Humidity</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "uvi" ? "1" : "0.5" }} onClick={graphUVI}>UVI</button>

            </div>

        </div>
    )
}