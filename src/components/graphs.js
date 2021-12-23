import React, { useEffect, useState } from 'react';
import { Graph } from '../assets/icon-components/graph';

export function Graphs({ type }) {
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
    const [humidity, setHumidity] = useState("")
    const [temps, setTemps] = useState("")
    const [uv, setUV] = useState("")
    const xScale = [46, 85, 120, 155, 190, 225, 260, 300]
    const yScale = [10, 50, 95]
    const tempt = [10, 20, 40, 20, 30, 0, 7, 0]
    const pctY = ["100%", "50%", "0%"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const uviY = ["12", "5", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const tempY = ["40", "20", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const dates = data.daily?.map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="106">{new Date(m.dt * 1000).getDate()}</text> })
    const hours = data.hourly?.slice(0, 8).map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="106">{new Date(m.dt * 1000).getHours()}</text> })
    console.log(data.daily)
    useEffect(() => {
        setPoints((xScale.map((v, i) => { return `${v},${type === "d" ? 100 - (100 * data.daily[i].pop) : 100 - (100 * data.hourly[i].pop)}` })).join(" "))
        setHumidity((xScale.map((v, i) => { return `${v},${100 - (data.daily[i].humidity)}` })).join(" "))
        setUV((xScale.map((v, i) => { return `${v},${(data.daily[i].uvi)}` })).join(" "))
        setTemps((xScale.map((v, i) => { return `${v},${type === "d" ? (40 - data.daily[i].temp.day).toFixed(3) : (40 - data.hourly[i].temp.toFixed(3))}` })).join(" "))
    }, [type])

    console.log(temps)

    return (
        <div className='graphs'>
            <Graph type="Chances of Rain" points={points} axisX={type=== "d" ? dates: hours} axisY={pctY}/>
            {/* <Graph type="Humidity" points={humidity} axisX={dates} axisY={pctY}/> */}
            {/* <Graph type="UVI" points={uv} axisX={dates} axisY={uviY}/> */}
            {/* <Graph type="Temps." points={temps} axisX={type === "d" ? dates : hours} axisY={tempY} /> */}
        </div>
    )
}