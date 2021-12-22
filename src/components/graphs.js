import React,{useEffect,useState} from 'react';
import { Graph } from '../assets/icon-components/graph';

export function Graphs() {
    const data = JSON.parse(localStorage.getItem('ow_api'))
    const [points, setPoints] = useState("")
    const [humidity, setHumidity] = useState("")
    const [uv, setUV] = useState("")
    const xScale = [46, 85, 120, 155, 190, 225, 260, 295]
    const yScale = [10, 50, 95]
    const pctY = ["100%", "50%", "0%"].map((m,i)=>{ return <text key={i} x="0" y={yScale[i]}>{m}</text>})
    const uviY = ["12", "5", "0"].map((m,i)=>{ return <text key={i} x="0" y={yScale[i]}>{m}</text>})
    console.log(data.daily)
    useEffect(() => {
        setPoints((xScale.map((v, i) => { return `${v},${100 - (100 * data.daily[i].pop)}` })).join(" "))
        setHumidity((xScale.map((v, i) => { return `${v},${100 - (data.daily[i].humidity)}` })).join(" "))
        setUV((xScale.map((v, i) => { return `${v},${(data.daily[i].uvi)}` })).join(" "))
    }, [])

    const dates = data.daily.map((m,i)=>{ return <text key={i} x={xScale[i]} y="106">{new Date(m.dt *1000).getDate()}</text>})
    
    
    return (
        <div className='graphs'>
            <Graph type="Chances of Rain" points={points} axisX={dates} axisY={pctY}/>
            {/* <Graph type="Humidity" points={humidity} axisX={dates} axisY={pctY}/> */}
            {/* <Graph type="UVI" points={uv} axisX={dates} axisY={uviY}/> */}
        </div>
    )
}