import React, { createContext, useState } from 'react';
// import { Graph } from '../assets/icon-components/graph';
import { GetData } from '../data/fetch';
import { Current } from './current';
import { Hourly } from './forecast';
import { Graphs } from './graphs';
import { Header } from './header';

export const globalStat = createContext(null)
export const globalCount = createContext(null)
export const globalData = createContext(null)
export function Base() {
    const [data, setData] = useState()
    const [stat, setStat] = useState(false)
    const [count, setCount] = useState(0)
    const [red, setRed] = useState(255)
    const [blue, setBlue] = useState(255)
    const [green, setGreen] = useState(255)
//    console.log(data)
    return (
        <>
            <globalStat.Provider value={{stat, setStat}}>
                <globalCount.Provider value={{ count, setCount }}>
                    <globalData.Provider value={{ data, setData, red, blue, green, setRed, setBlue, setGreen}}>

                        <GetData />
                        <div className='home-flex' style={{background:`rgb(${red},${blue},${green})`}}>
                            {/* {localStorage.getItem('time') ? <Header/> : 'error'} */}
                            {/* {localStorage.getItem('time') ? <Current/> : 'error'} */}
                            {/* {localStorage.getItem('time') ? <Hourly/> : 'error'} */}
                            <Graphs/>
                        </div>
                    </globalData.Provider>
                </globalCount.Provider>
            </globalStat.Provider>
        </>
      
    )
}