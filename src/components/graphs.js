import React, { useEffect, useState, useContext } from 'react';
import { Graph } from './svg/graph';
import { GlobalColors, GlobalData } from '../context/contexts';

export function Graphs({ type, setPoly, poly }) {
    const { textColor } = useContext(GlobalColors)
    const styles = {
        fill: textColor,
        fontSize: ".9rem",
        fontFamily: "'Barlow', serif",
        fontWeight: "100",
        letterSpacing: ".1rem",
        textAlign: 'right',
        opacity: '1'
    }
    const { data } = useContext(GlobalData)
    const [points, setPoints] = useState("")
    const [dots, setDots] = useState("")
    const xScale = [46, 85, 120, 155, 190, 225, 260, 300]
    const yScale = [1, 50, 100]
    // const tempt = [12, 2, 4, 12, 10, 0, 7, 0]
    const pctY = ["100%", "50%", "0%"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const uviY = ["12", "5", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const tempY = ["40", "20", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const dates = data.daily?.map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="120">{new Date(m.dt * 1000).getDate()}</text> })
    const hours = data.hourly?.slice(0, 8).map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="120">{new Date(m.dt * 1000).getHours()}</text> })
    // console.log(data.daily)
    const [graph, setGraph] = useState("temp")
    // const [poly, setPoly] = useState(false)
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

    const onHover = (v) => {
        console.log(v)
        return <div style={{ backgroundColor: '#fff', height: '15rem', width: '15rem', position: 'absolute' }}>
            <p>{v}</p>
        </div>
    }

    useEffect(() => {
        switch (graph) {
            case "prec":
                setPoints((xScale.map((v, i) => { return `${v},${type === "d" ? 100 - (100 * data.daily[i].pop) : 100 - (100 * data.hourly[i].pop)}` })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} id="sun" cx={v} cy={type === "d" ? 100 - (100 * data.daily[i].pop) : 100 - (100 * data.hourly[i].pop)} r="4" /> })))
                break;
            case "humidity":
                setPoints((xScale.map((v, i) => { return `${v},${type === "d" ? 100 - (data.daily[i].humidity) : 100 - (data.hourly[i].humidity)}` })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} id="sun" cx={v} cy={type === "d" ? 100 - (data.daily[i].humidity) : 100 - (data.hourly[i].humidity)} r="4" /> })))
                break
            case "uvi":
                setPoints((xScale.map((v, i) => { return `${v},${type === "d" ? 100 - (data.daily[i].uvi * 8.333) : 100 - (data.hourly[i].uvi * 8.333)}` })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} onClick={() => { onHover(data.daily[i].uvi) }} id="sun" cx={v} cy={type === "d" ? 100 - (data.daily[i].uvi * 8.333) : 100 - (data.hourly[i].uvi * 8.333)} r="4"/> })))
                break
            case "temp":
                setPoints((xScale.map((v, i) => { return `${v},${type === "d" ? (60 - data.daily[i].temp.day) : (60 - data.hourly[i].temp)}` })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} id="sun" cx={v} cy={type === "d" ? (60 - data.daily[i].temp.day) : (60 - data.hourly[i].temp)} r="4" /> })))
                break
            default:
                break;
        }
        // console.log(points)
    }, [graph, type])

    return (
        <div className='forecast-data-chart'>
            <Graph points={points} axisX={type === "d" ? dates : hours} axisY={graph === "uvi" ? uviY : graph === "temp" ? tempY : pctY} show={poly} dots={dots} />
            <div className='forecast-data-chart-footer'>
                <button className="forecast-data-chart-footer-btn" style={{opacity: graph=== "temp" ? "1": "0.5"}} onClick={graphTemp}>Temp</button>
                <button className="forecast-data-chart-footer-btn" style={{opacity: graph=== "prec" ? "1": "0.5"}} onClick={graphPrec}>Preci. </button>
                <button className="forecast-data-chart-footer-btn" style={{opacity: graph=== "humidity" ? "1": "0.5"}} onClick={graphHumidity}>Humidity </button>
                <button className="forecast-data-chart-footer-btn" style={{opacity: graph=== "uvi" ? "1": "0.5"}} onClick={graphUVI}>UVI </button>

            </div>

        </div>
    )
}