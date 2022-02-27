import { useContext, useEffect, useState } from "react"
import { GlobalColors, GlobalTime } from "../../context/contexts"
import IconAll from "./iconWeather"

export function Graph({ points, axisX, axisY, show, dots, info, click, icon, graph, snowRain, pValue }) {
    const { day } = useContext(GlobalTime)
    const { textColor } = useContext(GlobalColors)
    const [v, setV] = useState(100)

    useEffect(() => { day ? setV(100) : setV(60) }, [day])
    const { hsl } = useContext(GlobalColors)
    // console.log(show)
    return (
        //20 -70 300 200
        <div className="graph-flex">
            <svg viewBox={`0 -70 300 220`} width="100%" height="100%" onClick={click}>

                <g className="forecast-data-chart-show" >
                    <polyline
                        fill="none"
                        stroke={textColor}
                        strokeWidth="0.4"
                        strokeDasharray="4 7"
                        opacity={0.5}
                        style={{ transition: 'all .5s ease-in-out' }}
                        points={points}
                    />
                </g>

                <g style={{ opacity: (graph === 'rain' || graph === 'snow') ? 0.8 : 0 }}>
                    {snowRain}
                    {pValue}
                </g>

                <g style={{ transition: 'all .5s ease-in-out' }}>
                    {axisX}
                </g>
                <g style={{ transition: 'all .5s ease-in-out' }}>
                    {icon}
                </g>

                <g>
                    <text x={150} y={126} style={{ fill: textColor }} dominantBaseline='middle' className="forecast-data-chart-main forecast-data-chart-main-footer">{graph === 'rain' ? "---Rain(mm) / Precipitation(%)"
                        : graph === 'temp' ? 'Temperature' :
                            graph === 'humidity' ? 'Humidity (%)' :
                                graph === 'uvi' ? 'UltraVoilet Index' :
                                    graph === 'snow' ? '---Snow(mm) / Precipitation(%)' :
                                        graph === 'preci' ? 'Precipitation (%)' : graph === 'wind' ? 'Wind (m/s)' : ''}</text>
                </g>

                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${40}%)`} />
                    <stop offset="100%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${v}%, 0)`} />
                </linearGradient>

                <g fill={`hsl(${hsl.h}, ${hsl.s}%,${60}%)`} stroke={textColor} style={{ opacity: (graph !== 'rain' && graph !== 'snow') ? 1 : 0 }}>
                    {dots}
                </g>

                <g style={{ transition: 'all .5s ease-in-out' }}>
                    {info}
                </g>


            </svg>
        </div>

    )
}