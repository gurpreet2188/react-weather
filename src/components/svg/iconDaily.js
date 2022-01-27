import React, { useContext } from 'react';
import { GlobalColors } from '../../context/contexts';

export function IconDaily({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M6.98387 1.94672H6.09338V3.94672V5.15139V5.3421H5.81348C3.05205 5.3421 0.813477 7.58068 0.813477 10.3421V17.7761C0.813477 20.5375 3.05205 22.7761 5.81348 22.7761H17.8135C20.5749 22.7761 22.8135 20.5375 22.8135 17.7761V10.3421C22.8135 7.68542 20.7415 5.51267 18.1253 5.35167V5.15139V3.94672V1.94672H17.2349H16.1253H15.2349V3.94672V5.15139V5.3421H8.98387V5.15139V3.94672V1.94672H8.09338H6.98387ZM17.8135 7.3421H5.81348C4.15662 7.3421 2.81348 8.68525 2.81348 10.3421V17.7761C2.81348 19.433 4.15662 20.7761 5.81348 20.7761H17.8135C19.4703 20.7761 20.8135 19.433 20.8135 17.7761V10.3421C20.8135 8.68525 19.4703 7.3421 17.8135 7.3421Z" fill={textColor} />
            <rect x="6.03857" y="10.0591" width="3" height="3" stroke={textColor} strokeWidth="2" />
        </svg>
    )
}