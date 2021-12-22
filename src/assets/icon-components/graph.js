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
                <g>
                    <polyline
                        fill="none"
                        stroke="#000"
                        strokeWidth="1"
                    points={points}
                    />
                </g>
                {console.log(points)}

            </svg>

            <p>{type}</p>
        </>

    )
}