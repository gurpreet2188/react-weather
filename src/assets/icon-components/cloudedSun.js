import React from 'react';

export function IconCloudedSun({ w, h, anim, fill }) {

    return (
        <svg width={w} height={h} className='svg-common' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <filter id="f1" x="0" y="0" width="200%" height="200%">
                <feOffset result="offOut" in="SourceGraphic" dx="20" dy="20" />
                <feBlend in="SourceGraphic" in2="offOut" mode="normal" />
            </filter>
            <clipPath id="cp">
                <path d="m23.993 18.247v-18.247h-23.993v15.665c0.175-4.264 3.639-7.665 7.886-7.665 3.366 0 6.36 2.164 7.46 5.389 0.897-0.57 1.935-0.874 2.994-0.875 3.122 0 5.653 2.566 5.653 5.731v2e-3zv5.732h-5.653-5.574c2.908-0.013 2.426-1e-3 5.574 0 3.122 0 5.653-2.566 5.653-5.732zm-16.758 5.732h-7.235v-7.638c0.166 4.043 3.29 7.312 7.235 7.638z" />
            </clipPath>
            <g clipPath='url(#cp)' className='svg-common'>

                <ellipse cx="12" cy="12" rx="6.8883" ry="6.9843" fill={fill ? "#000": "none"}/>
                <circle cx="11.993" cy="12.015" r="11.006" className={anim ? "svg-dash dash-anim": "svg-dash"}/>
            </g>
            <path d="m8.8099 11.011c-3.3019 0-5.9795 2.7146-5.9795 6.0634 0 3.3488 2.6776 6.0634 5.9795 6.0634 6.5334-0.03879 4.665-0.02165 7.92-0.02075 2.3663 0 4.2834-1.945 4.2834-4.3439-9.02e-4 -2.3979-1.918-4.3421-4.2834-4.3421-0.80202 9.02e-4 -1.5887 0.23095-2.268 0.66308-0.83269-2.4439-3.1025-4.0831-5.652-4.0831z" fill={fill ? "#000": "none"}/>
        </svg>

    )
}