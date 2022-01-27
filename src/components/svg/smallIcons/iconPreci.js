import React, { useContext } from 'react';
import { GlobalColors } from '../../../context/contexts';


export function IconPreci({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_33_169)">
                <path d="M19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 14.1448 5.17279 13.551 5.46155 13.0168C5.76991 12.4463 6.22465 11.9115 6.88327 11.1683C6.92418 11.1222 6.96558 11.0755 7.00747 11.0283C8.30996 9.56042 10.0802 7.56534 11.9033 3.72572C11.9094 3.71286 11.9145 3.70814 11.9238 3.70274C11.9376 3.6947 11.9642 3.68522 12 3.68522C12.0358 3.68522 12.0624 3.6947 12.0762 3.70274C12.0855 3.70814 12.0906 3.71286 12.0967 3.72572C13.9198 7.56534 15.69 9.56042 16.9925 11.0283C17.0344 11.0755 17.0758 11.1222 17.1167 11.1683C17.7754 11.9115 18.2301 12.4463 18.5384 13.0168C18.8272 13.551 19 14.1448 19 15Z" stroke={textColor} strokeWidth="1.2" strokeLinejoin="round" />
                <circle cx="12" cy="16" r="3" fill={textColor} />
                <line x1="10" y1="21" x2="10" y2="16" stroke={textColor} strokeWidth="1.3" />
            </g>
        </svg>

    )
}