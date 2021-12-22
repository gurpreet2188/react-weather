import React from 'react';
export function Header() {
    const data = JSON.parse(localStorage.getItem('ow_api'))
    console.log((data.timezone).split('/')[1])
    return (
       <div className='header'>
           <div>
           <h1 className='header-title'>{localStorage.getItem('name')}</h1>
           <h1 className='header-subtitle'>/{(data.timezone).split('/')[1]}</h1>
           </div>
       </div>
    )
}