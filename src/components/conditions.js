import React, { useEffect, useState } from 'react'
import { WeatherIcons } from './svg/weatherIcons'

export function Conditions ({ data, s, type, day }) {
  const [condition, setCondition] = useState()

  useEffect(() => {
    const clouds = type ? data.current?.clouds : data?.clouds
    const id = type ? data.current?.weather[0].id : data?.id
    const rain = type ? data.current?.rain ? true : false : data.rain
    const snow = type ? data.current?.snow ? true : false : data.snow
    const thunder = id >= 200 && id <= 232 ? true : false
    if (!rain && !snow) {
      if (clouds >= 75) {
        setCondition('clouded')
      } else if (clouds >= 11 && clouds <= 74) {
        if (day) {
          setCondition('sunClouded')
        } else {
          setCondition('moonClouded')
        }
      } else if (clouds <= 10) {
        if (day) {
          setCondition('sun')
        } else {
          setCondition('moon')
        }
      }
    } else if (rain && !snow) {
      if (!thunder) {
        setCondition('rain')
      } else {
        setCondition('rainThunder')
      }
    } else if (!rain && snow) {
      if (!thunder) {
        setCondition('snow')
      } else {
        setCondition('snowThunder')
      }
    } else if (rain && snow) {
      setCondition('rainSnow')
    }
  }, [data, s, type])

//   useEffect(()=>{},[condition])

  return <WeatherIcons s={s} icon={condition} />
}
