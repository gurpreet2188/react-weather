import { useContext, useEffect, useState } from "react"
import { GlobalColors, GlobalTime } from "../../context/contexts"
import IconAll from "./iconWeather"

export function Graph({ points, axisX, axisY, show, dots, info, click, icon, graph }) {
    const { day } = useContext(GlobalTime)
    const { textColor } = useContext(GlobalColors)
    const [v, setV] = useState(100)

    useEffect(() => { day ? setV(100) : setV(60) }, [day])
    const { hsl } = useContext(GlobalColors)
    // console.log(show)
    return (
        <div className="graph-flex">
            <svg viewBox={`20 -70 300 200`} width="100%" height="100%" onClick={click}>

                <g className="forecast-data-chart-show" style={{ transition: 'all .5s ease-in-out' }}>
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

                <g style={{ transition: 'all .5s ease-in-out' }}>
                    {axisX}
                </g>
                <g style={{ transition: 'all .5s ease-in-out' }}>
                    {icon}
                </g>

                <g>
                    <text x={20} y={-62} style={{ fontSize: '0.7rem', fontFamily: "'Barlow', serif",fontWeight: 100, opacity: 0.6, fill: textColor }}>{graph === 'rain' ? "Rain (mm)"
                        : graph === 'temp' ? 'Temperature' :
                            graph === 'humidity' ? 'Humidity (%)' :
                                graph === 'uvi' ? 'UltraVoilet Index' :
                                    graph === 'snow' ? 'Snow (mm)' :
                                        graph === 'preci' ? 'Precipitation (%)' : ''}</text>
                </g>

                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${40}%)`} />
                    <stop offset="100%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${v}%, 0)`} />
                </linearGradient>

                <g fill={`hsl(${hsl.h}, ${hsl.s}%,${60}%)`} stroke={textColor} style={{ transition: 'all .5s ease-in-out' }}>
                    {dots}
                </g>

                <g style={{ transition: 'all .5s ease-in-out' }}>
                    {info}
                </g>


            </svg>
        </div>

    )
}