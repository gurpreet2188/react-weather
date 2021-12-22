import React from 'react';
export function Header() {
    const data = JSON.parse(localStorage.getItem('ow_api'))
    const name = JSON.parse(localStorage.getItem('name'))
    console.log((data.timezone).split('/')[1])
    return (
       <div className='header'>
           <div>
           <h1 className='header-title'>{name.name}</h1>
           <h1 className='header-subtitle'>{name.country}</h1>
           </div>
       </div>
    )
}