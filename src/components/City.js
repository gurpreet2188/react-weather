import React from 'react'

function City({currentData}) {
  
  return (
    <div className='flex flex-col justify-center items-start self-start p-4'>
        <p className='text-sm font-normal tracking-wider opacity-70'>{currentData?.sys?.country}</p>
        <h1 className='text-6xl font-thin tracking-wider'>{currentData?.name}</h1>
    </div>
  )
}

export default City