import React, { useContext } from 'react';
import { GlobalColors } from '../../../context/contexts';


export function IconSnow({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M11 17.5C11 18.3284 10.3284 19 9.5 19C8.67157 19 8 18.3284 8 17.5C8 16.6716 8.67157 16 9.5 16L9.16323 17.0365H8.07342L8.95509 17.6771L8.61832 18.7135L9.5 18.0729L10.3817 18.7135L10.0449 17.6771L10.9266 17.0365H9.83677L9.5 16C10.3284 16 11 16.6716 11 17.5Z" fill={textColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M17 17.5C17 18.3284 16.3284 19 15.5 19C14.6716 19 14 18.3284 14 17.5C14 16.6716 14.6716 16 15.5 16L15.1632 17.0365H14.0734L14.9551 17.6771L14.6183 18.7135L15.5 18.0729L16.3817 18.7135L16.0449 17.6771L16.9266 17.0365H15.8368L15.5 16C16.3284 16 17 16.6716 17 17.5Z" fill={textColor} />
            <path fillRule="evenodd" clipRule="evenodd" d="M14 21.5C14 22.3284 13.3284 23 12.5 23C11.6716 23 11 22.3284 11 21.5C11 20.6716 11.6716 20 12.5 20L12.1632 21.0365H11.0734L11.9551 21.6771L11.6183 22.7135L12.5 22.0729L13.3817 22.7135L13.0449 21.6771L13.9266 21.0365H12.8368L12.5 20C13.3284 20 14 20.6716 14 21.5Z" fill={textColor} />
            <mask id="path-4-inside-1_40_40" fill="white">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.41006 2C4.87041 2 2 4.91006 2 8.5C2 12.0899 4.87041 15 8.41006 15C15.4139 14.9584 13.411 14.9768 16.9004 14.9778C19.4371 14.9778 21.4923 12.8926 21.4923 10.3211C21.4913 7.75048 19.4362 5.66634 16.9004 5.66634C16.0406 5.66731 15.1973 5.91392 14.4691 6.37717C13.5764 3.75725 11.1431 2 8.41006 2V2Z" />
            </mask>
            <path fillRule="evenodd" clipRule="evenodd" d="M8.41006 2C4.87041 2 2 4.91006 2 8.5C2 12.0899 4.87041 15 8.41006 15C15.4139 14.9584 13.411 14.9768 16.9004 14.9778C19.4371 14.9778 21.4923 12.8926 21.4923 10.3211C21.4913 7.75048 19.4362 5.66634 16.9004 5.66634C16.0406 5.66731 15.1973 5.91392 14.4691 6.37717C13.5764 3.75725 11.1431 2 8.41006 2V2Z" stroke={textColor} strokeWidth="2" strokeLinejoin="round" mask="url(#path-4-inside-1_40_40)" />
        </svg>

    )
}