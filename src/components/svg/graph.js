import { useContext, useEffect, useState } from "react"
import { GlobalColors, GlobalTime } from "../../context/contexts"

export function Graph({ points, axisX, axisY, show, dots, info }) {
    const { sun } = useContext(GlobalTime)
    const [v, setV] = useState(100)

    useEffect(() => { sun === 'sunrise' ? setV(100) : setV(60) }, [sun])
    const {hsl} = useContext(GlobalColors)
    // console.log(show)
    return (
        <div className="graph-flex">
            <svg viewBox={`0 -20 315 140`} width="100%" height="100%" >

                <g>
                    {axisY}
                </g>

                <g>
                    {axisX}
                </g>

               
                {/* <line x1="45" x2="45" y1="0" y2="90" stroke={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} strokeWidth="1px"></line>
                <line x1="45" x2="300" y1="90" y2="90" stroke={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} strokeWidth="1px"></line> */}
                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${hsl.l-5}%)`} />
                    <stop offset="100%" stopColor={`hsl(${hsl.h}, ${hsl.s}%,${v}%, 0)`} />
                </linearGradient>

                <g className={show ? "forecast-data-chart-show" : "forecast-data-chart-hide"} style={{transition: 'all .5s ease-in-out'}}>
                    <polygon
                        fill="url(#rGradient)"
                        // stroke={`hsl(${hsl.h}, ${50}%,${40}%)`}

                        // style={{transition: 'all 2s ease-in' }}
                        strokeWidth="1"
                        points={`46,100 ${points} 300,100`}
                    />
                </g>
                {/* {console.log(points)} */}
                <g  fill={`hsl(${hsl.h}, ${hsl.s}%,${hsl.l}%)`} stroke={`hsl(${hsl.h}, ${hsl.s}%,${v}%)`} style={{transition: 'all .5s ease-in-out'}}>
                    {dots}
                    {info}
                </g>
              

            </svg>
        </div>

    )
}