import { useState, useEffect, useContext } from "react"
import { globalData } from "../../components/base"

export function Graph({ points, axisX, axisY,show }) {
    const {sun} = useContext(globalData)
    // console.log(show)
    return (
        <div className="graph-flex">
            <svg viewBox={`0 -9 315 120`} width="100%" height="100%" >

                <g>
                    {axisY}
                </g>

                <g>
                    {axisX}
                </g>
                {/* <line x1="45" x2="45" y1="0" y2="90" stroke={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} strokeWidth="1px"></line>
                <line x1="45" x2="300" y1="90" y2="90" stroke={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} strokeWidth="1px"></line> */}
                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" stopColor={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>

                <g  className={show ? "graph-poly-show" : "graph-poly-hide"} >
                    <polygon
                        fill="url(#rGradient)"
                        stroke="none"
                       
                        // style={{transition: 'all 2s ease-in' }}
                        strokeWidth="1"
                        points={`46,89 ${points} 300,89`}
                    />
                </g>
                {/* {console.log(points)} */}

            </svg>
        </div>

    )
}