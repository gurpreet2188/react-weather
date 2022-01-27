import React, { useContext } from 'react';
import { GlobalColors } from '../../context/contexts';

export function IconTemp({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">



            <g id="temp3"
                transform="matrix(0.82694017,0,0,0.82694017,-3.0186579,2.4475169)">

                <path
                    transform="translate(1.7657233,-0.4708595)"
                    stroke={textColor}
                    strokeWidth="2"
                    id="Ellipse 43-3"
                    d="m 12,0.9296875 c -2.77,0 -5,2.23 -5,5 V 10.498047 A 7.3083038,7.3083038 0 0 0 4.6914062,15.806641 7.3083038,7.3083038 0 0 0 12,23.115234 7.3083038,7.3083038 0 0 0 19.308594,15.806641 7.3083038,7.3083038 0 0 0 17,10.478516 V 5.9296875 c 0,-2.77 -2.23,-5 -5,-5 z"
                />
            </g>
            <circle
                stroke={textColor}
                strokeWidth="2"
                id="path4768-5"
                cx="18.834383"
                cy="6.1604123"
                r="3.7668765" />
            <circle
                fill={textColor}
                id="path4768"
                cx="8.4362335"
                cy="15.538364"
                r="2.2427039" />
            <rect
                fill={textColor}
                id="rect5281"
                width="2.3542979"
                height="10.398149"
                x="7.2198462"
                y="5.4933615"
                ry="0.94171911" />


        </svg >
    )
}