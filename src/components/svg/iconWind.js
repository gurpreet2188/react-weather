import React, { useContext } from 'react';
import { GlobalColors } from '../../context/contexts';

export function IconWind({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="Ellipse 6" d="M13.6813 7.7343C13.6813 5.82255 15.3197 4.27277 17.3407 4.27277C19.3617 4.27277 21 5.82255 21 7.7343C21 9.64606 19.3617 11.1958 17.3407 11.1958H3" stroke={textColor} strokeWidth="2" strokeLinecap="round" />
            <path id="Ellipse 7" d="M11.2897 17.4262C11.2897 18.697 12.3259 19.7272 13.6041 19.7272C14.8822 19.7272 15.9184 18.697 15.9184 17.4262C15.9184 16.1554 14.8822 15.1251 13.6041 15.1251H4.5343" stroke={textColor} strokeWidth="2" strokeLinecap="round" />
        </svg>
    )
}