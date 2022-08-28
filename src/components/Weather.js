import React from 'react'
import City from './City'
import Forecast from './Forecast'
import Settings from './Settings'
import WeatherInfo from './WeatherInfo'

function Weather() {

    return (

        <div className='h-screen w-screen flex flex-col bg-slate-500 text-white gap-4'>
            <Settings />
            <WeatherInfo />
            <City/>
            <Forecast/>
        </div>


    )
}

export default Weather