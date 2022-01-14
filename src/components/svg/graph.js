import { useContext, useEffect, useState } from "react"
import { GlobalColors, GlobalTime } from "../../context/contexts"

export function Graph({ points, axisX, axisY, show, dots, info, click }) {
    const { day } = useContext(GlobalTime)
    const { textColor } = useContext(GlobalColors)
    const [v, setV] = useState(100)

    useEffect(() => { day ? setV(100) : setV(60) }, [day])
    const { hsl } = useContext(GlobalColors)
    // console.log(show)
    return (
        <div className="graph-flex">
            <svg viewBox={`0 -20 315 150`} width="100%" height="100%" onClick={click}>

                <g>
                    {axisY}
                </g>

                <g>
                    {axisX}
                </g>


                <line x1="46" x2="46" y1="0" y2="100" stroke={textColor} strokeWidth="1px"></line>
                <line x1="300" x2="300" y1="0" y2="100" stroke={textColor} strokeWidth="1px"></line>
                <line x1="46" x2="300" y1="100" y2="100" stroke={textColor} strokeWidth="1px"></line>
                <line x1="46" x2="300" y1="0" y2="0" stroke={textColor} strokeWidth="1px"></line>
                <line x1="46" x2="300" y1="50" y2="50" stroke={day ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)"} strokeWidth="1px"></line>
                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${40}%)`} />
                    <stop offset="100%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${v}%, 0)`} />
                </linearGradient>

                <g className={show ? "forecast-data-chart-show" : "forecast-data-chart-hide"} style={{ transition: 'all .5s ease-in-out' }}>
                    <polygon
                        fill={`hsl(${hsl.h}, ${hsl.s}%,${hsl.l}%, 0.2)`}
                        stroke={textColor}
                        style={{ transition: 'all .5s ease-in-out' }}
                        strokeWidth="1"
                        points={`46,100 ${points} 300,100`}
                    />
                </g>
                {/* {console.log(points)} */}
                <g fill={`hsl(${hsl.h}, ${hsl.s}%,${60}%)`} stroke={textColor}>
                    {dots}
                </g>

                <g>
                    {info}
                </g>


            </svg>
        </div>

    )
}