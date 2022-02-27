import React from 'react';
import { IconWeatherAll } from './svg/iconWeatherAll';

export function Loading() {
    return (
        <div className='loading'>
            <div className='loading-bar'>
                <IconWeatherAll size={150} rain={false} snow={false} id={0} clouds={0} day={true} iconColor="#fff" anim={true} />
            </div>
        </div>
    )
}