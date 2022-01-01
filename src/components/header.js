import React, { useContext } from 'react';
import { GlobalData } from '../context/contexts';
export function Header() {
   const {name} = useContext(GlobalData)
    return (
       <div className='header'>
           <div>
           <h1 className='header-title'>{name.name}</h1>
           <h1 className='header-subtitle'>{name.country}</h1>
           </div>
       </div>
    )
}