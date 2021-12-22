import React from 'react';

export function IconSun({ w, h, anim, fill }) {

    return (
        <svg width={w} height={h} version="1.1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='svg-common'>
            <g className='svg-common'>
            <ellipse cx="12" cy="12" rx="6.8883" ry="6.9843" fill={fill ? "#000": "none"} />
            <circle cx="11.993" cy="12.015" r="11.006" className={anim ? "svg-dash": ""} />
        </g>
        </svg>
    )
}