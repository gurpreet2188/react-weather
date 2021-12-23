import React, { createContext, useState } from 'react';
import { GetData } from '../data/fetch';
import { Header } from './header';
import { Home } from './home';

export const globalStat = createContext(null)
export const globalCount = createContext(null)
export const globalData = createContext(null)
export function Base() {
    const [data, setData] = useState()
    const [stat, setStat] = useState(false)
    const [count, setCount] = useState(0)
    const [sun, setSun] = useState("")
    const [red, setRed] = useState(255)
    const [blue, setBlue] = useState(255)
    const [green, setGreen] = useState(255)
    const [red1, setRed1] = useState(255)
    const [blue1, setBlue1] = useState(255)
    const [green1, setGreen1] = useState(255)
    const [textColor,setFontColor] = useState("#000")
    const t = localStorage.getItem('time')
    const n = localStorage.getItem('name')
    const o = localStorage.getItem('ow_api')
    const a = localStorage.getItem('air')
    return (
        <>
            <globalStat.Provider value={{stat, setStat}}>
                <globalCount.Provider value={{ count, setCount }}>
                    <globalData.Provider value={{sun, setSun, data, setData, red, blue, green, setRed, setBlue, setGreen, setRed1, setBlue1, setGreen1, setFontColor, textColor}}>

                        <GetData />
                        <div className='home-flex' style={{background:`linear-gradient(180deg,rgb(${red},${blue},${green}), rgb(${red1},${blue1},${green1})`, color:textColor, stroke:textColor}}>
                            {(t && n && o && a) ? <Header/> : 'Loadding Data....'}
                            {(t && n && o && a) ? <Home/> : ''}
                        </div>
                    </globalData.Provider>
                </globalCount.Provider>
            </globalStat.Provider>
        </>
      
    )
}