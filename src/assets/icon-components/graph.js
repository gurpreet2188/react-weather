import { useState, useEffect } from "react"

export function Graph({ type, points, axisX, axisY }) {
    return (
        <>
            <svg viewBox={`0 -9 305 120`} width="300" height="100" >

                <g>
                    {axisY}
                </g>

                <g>
                    {axisX}
                </g>
                <line x1="45" x2="45" y1="0" y2="90" stroke="#000" strokeWidth="1px"></line>
                <line x1="45" x2="300" y1="90" y2="90" stroke="#000" strokeWidth="1px"></line>
                <linearGradient id="rGradient" gradientTransform="rotate(90)" spreadMethod="pad">
                    <stop offset="0%" x1="150" x2="150" stop-color="rgba(0,0,0,0.5)" />
                    <stop offset="100%" stop-color="rgba(255,255,255,0)" />
                </linearGradient>

                <g className="graph-dataline">
                    <polygon
                        fill="url(#rGradient)"
                        stroke="url(#rGradient)"
                        strokeWidth="1"
                        points={`46,89 ${points} 300,89`}
                    />
                </g>
                {console.log(points)}

            </svg>

            <p>{type}</p>
        </>

    )
}