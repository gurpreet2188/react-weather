import React, { useContext, useEffect } from 'react'
import checkData from '../data/checkData'
// import { localStorageName } from '../helpers/localStorage'
import { DataContext } from '../Main'
import City from './City'
import Forecast from './Forecast'
import Settings from './Settings'
import WeatherInfo from './WeatherInfo'

function Weather() {
    const { currentData, setCurrentData, oneCall, setOneCall } = useContext(DataContext)

    useEffect(() => {
        let check = true
        if (check) {
            setCurrentData(checkData().current)
            setOneCall(checkData().oneCall)
        }

        return () => check = false
    }, [])


    return (

        <div className='h-screen w-screen flex flex-col bg-teal-900 text-green-200 gap-4'>
            <Settings setCurrentData={setCurrentData} setOncall={setOneCall} />
            <WeatherInfo currentData={currentData} />
            <City currentData={currentData} />
            <Forecast oneCall={oneCall} />
        </div>


    )
}

export default Weather