import { useState, useEffect, useContext } from "react"
import { globalData } from "../../components/base"

export function Graph({ points, axisX, axisY }) {
    const {sun} = useContext(globalData)
    return (
        <div className="graph-flex">
            <svg viewBox={`0 -9 315 120`} width="100%" height="100%" >

                <g>
                    {axisY}
                </g>

                <g>
                    {axisX}
                </g>
                <line x1="45" x2="45" y1="0" y2="90" stroke={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} strokeWidth="1px"></line>
                <line x1="45" x2="300" y1="90" y2="90" stroke={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} strokeWidth="1px"></line>
                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" x1="150" x2="150" stopColor={sun === "sunrise" ? "rgba(0,0,0,0.5)": "rgba(255,255,255,0.5)"} />
                    <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                </linearGradient>

                <g className="show">
                    <polygon
                        fill="url(#rGradient)"
                        stroke="url(#rGradient)"
                        strokeWidth="1"
                        points={`46,89 ${points} 300,89`}
                    />
                </g>
                {console.log(points)}

            </svg>
        </div>

    )
}