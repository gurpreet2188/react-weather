import React, { useContext } from 'react';
import { GlobalColors } from '../../context/contexts';

export function IconArrow({ w, h, deg }) {
    const { textColor } = useContext(GlobalColors)
//    console.log(deg)
    return (
        <svg  width={w} height={h} stroke={textColor} fill='none' strokeWidth ='2' strokeLinejoin='round' style={{transformOrigin: 'center', transform: `rotate(${0}deg)`, justifySelf: 'center', alignSelf:'center'}} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

            <path style={{transformOrigin: '50% 50%', transform: `rotate(${deg}deg) translateY(0%)`,}} d="M 11.837479,5.504794 18.376823,19.365457 11.558254,16.05441 5.2601137,19.446047 Z" />
        </svg>

    )
}