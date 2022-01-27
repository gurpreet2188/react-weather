import React, { useContext } from 'react';
import { GlobalColors } from '../../../context/contexts';


export function IconUV({ s }) {
    const { textColor } = useContext(GlobalColors)

    return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_33_169)">
                <path d="M9.18 16.08C8.68667 16.08 8.25 15.9833 7.87 15.79C7.49 15.5967 7.19333 15.3233 6.98 14.97C6.77333 14.61 6.67 14.1967 6.67 13.73V9.12C6.67 9.08667 6.68 9.06 6.7 9.04C6.72667 9.01333 6.75667 9 6.79 9H7.71C7.74333 9 7.77 9.01333 7.79 9.04C7.81667 9.06 7.83 9.08667 7.83 9.12V13.75C7.83 14.1433 7.95333 14.4633 8.2 14.71C8.44667 14.9567 8.77333 15.08 9.18 15.08C9.58667 15.08 9.91333 14.9567 10.16 14.71C10.4067 14.4633 10.53 14.1433 10.53 13.75V9.12C10.53 9.08667 10.54 9.06 10.56 9.04C10.5867 9.01333 10.6167 9 10.65 9H11.57C11.6033 9 11.63 9.01333 11.65 9.04C11.6767 9.06 11.69 9.08667 11.69 9.12V13.73C11.69 14.1967 11.5867 14.61 11.38 14.97C11.1733 15.3233 10.88 15.5967 10.5 15.79C10.12 15.9833 9.68 16.08 9.18 16.08ZM14.8974 16C14.8308 16 14.7874 15.9667 14.7674 15.9L12.6674 9.14L12.6574 9.1C12.6574 9.03333 12.6941 9 12.7674 9H13.7574C13.8308 9 13.8774 9.03333 13.8974 9.1L15.3974 14.32C15.4041 14.34 15.4141 14.35 15.4274 14.35C15.4408 14.35 15.4508 14.34 15.4574 14.32L16.9474 9.1C16.9674 9.03333 17.0141 9 17.0874 9H18.0574C18.0974 9 18.1274 9.01333 18.1474 9.04C18.1674 9.06667 18.1708 9.1 18.1574 9.14L16.0274 15.9C16.0074 15.9667 15.9641 16 15.8974 16H14.8974Z" fill={textColor} />
                <circle cx="12" cy="12" r="10" stroke={textColor} strokeWidth="1.3" strokeDasharray="2 2" />
            </g>
        </svg>

    )
}