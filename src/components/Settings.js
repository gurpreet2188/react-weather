import React, { useState } from 'react'
import { IconContext } from 'react-icons'
import { RiSettings5Line } from 'react-icons/ri'

function Settings({setCurrentData, setOneCall}) {
    const [panel, setPanel] = useState(false)
    return (
        <>
            <SettingsHeader panel={panel} setPanel={setPanel} />
            {panel ? <SettingsOptions panel={panel} setPanel={setPanel} /> : ''}
        </>
    )
}


function SettingsHeader({ panel, setPanel }) {
    return (
        <>
            <IconContext.Provider value={{ color: '#fff', className: 'fill-white stroke-white' }}>
                <div className='flex self-end justify-self-end z-30 p-4'>
                    <button onClick={() => setPanel(!panel)}>
                        <IconContext.Provider value={{ color: '#fff', className: 'h-[1.5rem] w-[1.5rem]' }}>
                            <RiSettings5Line />
                        </IconContext.Provider>
                    </button>
                </div>



            </IconContext.Provider>
        </>
    )
}

function SettingsOptions({ panel, setPanel }) {
    return (
        <div className='absolute z-20 flex flex-col items-center justify-center h-screen w-screen' >
            <div className=' absolute z-10 bg-black/50 h-screen w-screen p-8' onClick={() => setPanel(!panel)}>
            </div>
            <div className='flex flex-col justify-center items-start p-4 rounded-md bg-slate-900 text-white min-w-[70%] min-h-fit z-30'>
                <p>1</p>
                <p>1</p>
                <p>1</p>
            </div>
        </div>
    )
}


export default Settings