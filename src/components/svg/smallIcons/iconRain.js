import React, { useContext } from 'react';
import { GlobalColors } from '../../../context/contexts';


export function IconRain({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="7" y="16.7071" width="1" height="3" rx="0.5" transform="rotate(-45 7 16.7071)" fill={textColor} />
            <rect x="11" y="16.7071" width="1" height="3" rx="0.5" transform="rotate(-45 11 16.7071)" fill={textColor} />
            <rect x="11" y="19.7071" width="1" height="3" rx="0.5" transform="rotate(-45 11 19.7071)" fill={textColor} />
            <rect x="15" y="19.7071" width="1" height="3" rx="0.5" transform="rotate(-45 15 19.7071)" fill={textColor} />
            <rect x="15" y="16.7071" width="1" height="3" rx="0.5" transform="rotate(-45 15 16.7071)" fill={textColor} />
            <mask id="path-4-inside-1_40_40" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.41006 2C4.87041 2 2 4.91006 2 8.5C2 12.0899 4.87041 15 8.41006 15C15.4139 14.9584 13.411 14.9768 16.9004 14.9778C19.4371 14.9778 21.4923 12.8926 21.4923 10.3211C21.4913 7.75048 19.4362 5.66634 16.9004 5.66634C16.0406 5.66731 15.1973 5.91392 14.4691 6.37717C13.5764 3.75725 11.1431 2 8.41006 2V2Z" />
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.41006 2C4.87041 2 2 4.91006 2 8.5C2 12.0899 4.87041 15 8.41006 15C15.4139 14.9584 13.411 14.9768 16.9004 14.9778C19.4371 14.9778 21.4923 12.8926 21.4923 10.3211C21.4913 7.75048 19.4362 5.66634 16.9004 5.66634C16.0406 5.66731 15.1973 5.91392 14.4691 6.37717C13.5764 3.75725 11.1431 2 8.41006 2V2Z" stroke={textColor} strokeWidth="2" strokeLinejoin="round" mask="url(#path-4-inside-1_40_40)" />
        </svg>

    )
}