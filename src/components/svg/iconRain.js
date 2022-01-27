import React, { useContext } from 'react';
import { GlobalColors } from '../../context/contexts';

export function IconRain({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="path11" d="M8.41006 15C4.87041 15 2 12.0899 2 8.5C2 4.91006 4.87041 2 8.41006 2C11.1431 2 13.5764 3.75725 14.4691 6.37717C15.1973 5.91392 16.0406 5.66731 16.9004 5.66634C19.4362 5.66634 21.4913 7.75048 21.4923 10.3211C21.4923 12.8926 19.4371 14.9778 16.9004 14.9778" stroke={textColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect id="Rectangle 20" x="6.06201" y="16.63" width="2" height="6" rx="1" fill={textColor} />
            <rect id="Rectangle 24" x="13.9376" y="15.2221" width="2" height="6" rx="1" fill={textColor} />
            <rect id="Rectangle 25" x="10" y="12.2221" width="2" height="6" rx="1" fill={textColor} />
        </svg>
    )
}