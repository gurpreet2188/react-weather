import React, { createContext, useState } from 'react'
import Home from './components/Home'
import Weather from './components/Weather'

export const DataContext = createContext()
function Main() {
    const [currentData, setCurrentData] = useState()
    const [oneCall, setOneCall] = useState()
    console.log(currentData, oneCall)
    return (
        <DataContext.Provider value={{ currentData, setCurrentData, oneCall, setOneCall }}>
            {(currentData && oneCall) ? <Weather /> : <Home />}
        </DataContext.Provider>
    )
}

export default Main