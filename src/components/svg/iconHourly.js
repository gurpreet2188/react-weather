import React, { useContext } from 'react';
import { GlobalColors } from '../../context/contexts';

export function IconHourly({ s }) {
    const {textColor} = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke={textColor} strokeWidth="2" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 16C11.4477 16 11 15.5523 11 15V14.292C10.4233 14.04 9.96 13.5767 9.70802 13H8.93311C8.38082 13 7.93311 12.5523 7.93311 12C7.93311 11.4477 8.38082 11 8.93311 11H9.70802C9.96 10.4233 10.4233 9.95999 11 9.70801V5.0329C11 4.48061 11.4477 4.0329 12 4.0329C12.5523 4.0329 13 4.48061 13 5.0329V9.70801C13.5767 9.95999 14.04 10.4233 14.292 11H18.0301C18.5824 11 19.0301 11.4477 19.0301 12C19.0301 12.5523 18.5824 13 18.0301 13H14.292C14.04 13.5767 13.5767 14.04 13 14.292V15C13 15.5523 12.5523 16 12 16Z" fill={textColor} />
        </svg>
    )
}