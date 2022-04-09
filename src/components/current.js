import React, { useContext, useState } from 'react'
import { GlobalColors, GlobalData, GlobalTime } from '../context/contexts'
import { Conditions } from './conditions'
import { ForecastContext } from './home'
import { useResponsive } from './responsive'
import { CommonIcons } from './svg/commonIcons'
import { IconWeatherAll } from './svg/iconWeatherAll'

export function Current () {
  // const { forecastOpen } = useContext(ForecastContext)
  const { data } = useContext(GlobalData)
  const { day } = useContext(GlobalTime)
  const { textColor, hsl } = useContext(GlobalColors)
  const { iconSize, weatherIconSize, desktop } = useResponsive()
  // const [units, setUnits] = useState(true)
  const clouds = data.current?.clouds
  const id = data.current?.weather[0].id
  const rain = data.current?.rain ? true : false
  const snow = data.current?.snow ? true : false
  const tempMax = Math.floor(data.daily[0]?.temp.max)
  const tempMin = Math.floor(data.daily[0]?.temp.min)
  const { aqi } = useContext(GlobalData)
  const aq = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor']
  // const onClikcChangeLocation = () => {
  //     localStorage.clear() // clearing all localstorage will automagically reset to the welcome page
  //     window.location.reload(false) // refresh page to actually open the welcome page
  // }
// console.log(data.daily[0].temp.max)
  return (
    <div className='home-current'>
      <div className='home-current-image'>
        <Conditions s={200} data={data} type='current' />
      </div>
      <div className='home-current-stats'>
        <div className='home-current-stats-row'>
          <CommonIcons s={24} icon='aq' />
          <h3>{aq[parseInt(aqi.list[0]?.main.aqi) - 1]}</h3>
        </div>
        <div className='home-current-stats-row'>
          <CommonIcons s={22} icon='wind' />
          <h3>{data.current?.wind_speed} m/s</h3>
          <CommonIcons s={18} icon='deg' deg={data.current?.wind_deg} />
        </div>
      </div>
      <div className='home-current-temp'>
          <div className='home-current-temp-highlow'>
            <div className='home-current-temp-highlow-col'>
                {/* <CommonIcons s={18} icon=''/> */}
                <p>{parseInt(data.daily[0]?.temp.max)}</p>
            </div>
            <div className='home-current-temp-highlow-col'>
            <p>{parseInt(data.daily[0]?.temp.min)}</p>
            </div>
          </div>
          <h1 className='home-current-temp-main'>{parseInt(data.current?.temp)}</h1>
      </div>
      <div className='home-current-temp'></div>
    </div>
  )
}
