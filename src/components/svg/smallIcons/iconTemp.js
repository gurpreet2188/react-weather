import React, { useContext } from 'react';
import { GlobalColors } from '../../../context/contexts';


export function IconTemp({ s }) {
    const {textColor} = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_33_169)">
                <mask id="path-2-inside-1_33_169" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 1C10.3431 1 9 2.34315 9 4V5V9V13V13.9996C7.78555 14.9118 7 16.3642 7 18C7 20.7614 9.23858 23 12 23C14.7614 23 17 20.7614 17 18C17 16.3642 16.2144 14.9118 15 13.9996V4C15 2.34315 13.6569 1 12 1Z" />
                </mask>
                <path d="M9 13.9996L9.60058 14.7992L10 14.4992V13.9996H9ZM15 13.9996H14V14.4992L14.3994 14.7992L15 13.9996ZM10 4C10 2.89543 10.8954 2 12 2V0C9.79086 0 8 1.79086 8 4H10ZM10 5V4H8V5H10ZM10 9V5H8V9H10ZM10 13V9H8V13H10ZM10 13.9996V13H8V13.9996H10ZM8 18C8 16.692 8.62676 15.5307 9.60058 14.7992L8.39942 13.2001C6.94434 14.293 6 16.0364 6 18H8ZM12 22C9.79086 22 8 20.2091 8 18H6C6 21.3137 8.68629 24 12 24V22ZM16 18C16 20.2091 14.2091 22 12 22V24C15.3137 24 18 21.3137 18 18H16ZM14.3994 14.7992C15.3732 15.5307 16 16.692 16 18H18C18 16.0364 17.0557 14.293 15.6006 13.2001L14.3994 14.7992ZM14 4V13.9996H16V4H14ZM12 2C13.1046 2 14 2.89543 14 4H16C16 1.79086 14.2091 0 12 0V2Z" fill={textColor} strokeWidth=".4" stroke={textColor} mask="url(#path-2-inside-1_33_169)" />
                <line x1="5" y1="8.5" x2="12" y2="8.5" stroke={textColor} />
                <line x1="6" y1="12.5" x2="12" y2="12.5" stroke={textColor} />
                <line x1="3" y1="4.5" x2="12" y2="4.5" stroke={textColor} />
                <circle cx="12" cy="18" r="2" fill={textColor} />
            </g>
        </svg>

    )
}