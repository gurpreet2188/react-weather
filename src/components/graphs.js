import React, { useEffect, useState } from 'react';
import { Graph } from '../assets/icon-components/graph';

export function Graphs({ time, type }) {
    const styles = {
        fontSize: ".9rem",
        fontFamily: "'Barlow', serif",
        fontWeight: "100",
        letterSpacing: ".1rem",
        textAlign: 'right',
        opacity: '.5'
    }
    const data = JSON.parse(localStorage.getItem('ow_api'))
    const [points, setPoints] = useState("")
    const xScale = [46, 85, 120, 155, 190, 225, 260, 300]
    const yScale = [10, 50, 95]
    // const tempt = [12, 2, 4, 12, 10, 0, 7, 0]
    const pctY = ["100%", "50%", "0%"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const uviY = ["12", "5", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const tempY = ["40", "20", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const dates = data.daily?.map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="106">{new Date(m.dt * 1000).getDate()}</text> })
    const hours = data.hourly?.slice(0, 8).map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="106">{new Date(m.dt * 1000).getHours()}</text> })
    console.log(data.daily)
    useEffect(() => {
        switch (type) {
            case "rain":
                setPoints((xScale.map((v, i) => { return `${v},${time === "d" ? 100 - (100 * data.daily[i].pop) : 100 - (100 * data.hourly[i].pop)}` })).join(" "))
                break;
            case "humidity":
                setPoints((xScale.map((v, i) => { return `${v},${time === "d" ? 100 - (data.daily[i].humidity) : 100 - (data.hourly[i].humidity)}` })).join(" "))
                break
            case "uvi":
                setPoints((xScale.map((v, i) => { return `${v},${time === "d" ? 100 - data.daily[i].uvi * 8 : 100 - data.hourly[i].uvi * 8}` })).join(" "))
                break
            case "temp":
                setPoints((xScale.map((v, i) => { return `${v},${time === "d" ? (60 - data.daily[i].temp.day) : (60 - data.hourly[i].temp)}` })).join(" "))
                break
            default:
                break;
        }
        console.log(points)
    }, [time, type])



    return (
        <div>
            <Graph points={points} axisX={time === "d" ? dates : hours} axisY={type === "uvi" ? uviY : type === "temp" ? tempY : pctY} />
        </div>
    )
}