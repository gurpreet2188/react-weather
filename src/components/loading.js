import React from 'react';
import { IconSun } from './svg/iconSun';

export function Loading() {
    console.log('test loading compo')
    return (
        <div className='loading'>
            <div className='loading-bar'>
                <div className='loading-anim'>
                    <IconSun s={200} />
                </div>
                <h3 className='loading-bar-text'>Loading...</h3>
            </div>
        </div>
    )
}