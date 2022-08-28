import React from 'react'
import { IconContext } from 'react-icons'
import { RiSunFill, RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'

function WeatherInfo() {
    return (
        <div className='flex self-start justify-self-start justify-between items-center w-[100%] p-4'>
            <div className='flex self-center justify-self-end'>
                <IconContext.Provider value={{ className: 'h-[12rem] w-[12rem]' }}>
                    <RiSunFill />
                </IconContext.Provider>
            </div>
            <div className='flex flex-col self-center justify-self-end'>
                <h1 className='text-7xl tracking-wider font-thin'>20<span className='text-3xl'>&#8451;</span></h1>
                <div className='flex items-center gap-6'>
                    <IconContext.Provider value={{ className: 'h-[1.3rem] w-[1.3rem]' }}>
                        <div className='flex justify-center items-center gap-1'>
                            <RiArrowDropDownLine />
                            <p>5</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <RiArrowDropUpLine />
                            <p>25</p>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo