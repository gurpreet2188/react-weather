import { useState, useEffect, useContext } from "react"
import { GlobalData } from "../../context/contexts"

export function useGraphData(dataType, graph) {
    const { data } = useContext(GlobalData)
    const [arr, setArr] = useState()
    const [pArr, setPArr] = useState() //Precipitation Array 
    const [pYArr, setPYArr] = useState()
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const [yLeg, setYLegend] = useState()
    const [yArr, setYArr] = useState()
    const [snow, setSnow] = useState([0])
    const [rain, setRain] = useState([0])
    const [icon, setIcon] = useState()
    const [windDeg, setWindDeg] = useState()

    const setHourlyIcon = (m) => {
        if (dataType[0].temp?.day) {
            return true

        } else {
            if (new Date(m.dt * 1000).getTime() < new Date(data.current.sunrise * 1000).getTime() || new Date(m.dt * 1000).getTime() > new Date(data.current.sunset * 1000).getTime()) {
                return false
            } else {
                return true
            }
        }

    }

    useEffect(() => {

        setArr(dataType.slice(0, 7).map(m => {
            switch (graph) {
                case "temp":
                    return Math.round(m.temp ? m.temp.day ? m.temp.day : m.temp : 0)
                case 'rain':
                    return m.rain ? m.rain["1h"] ? m.rain["1h"] : m.rain : 0
                case 'snow':
                    return m.snow ? m.snow["1h"] ? m.snow["1h"] : m.snow : 0
                case 'humidity':
                    return m.humidity
                // case 'preci':
                //     return Math.round(m.pop * 100)
                case 'uvi':
                    return Math.round(m.uvi)
                case 'wind':
                    return m.wind_speed ? m.wind_speed : 0
                default:
                    return m.temp

            }
        }))

        setPArr(dataType.slice(0, 7).map( m =>{
            return Math.round(m.pop * 100)
        }))


        setIcon(dataType.slice(0, 7).map(m => {
            return { clouds: m.clouds, rain: m.rain ? true : false, snow: m.snow ? true : false, id: m.weather[0].id, day: setHourlyIcon(m) }
        }))

        setWindDeg(dataType.slice(0,7).map (m => {
            return m.wind_deg
        }))

        setSnow(
            dataType.slice(0, 7).map(m => {
                return m.snow ? m.snow : 0
            })
        )
        setRain(
            dataType.slice(0, 7).map(m => {
                return m.rain ? m.rain : 0
            })

        )

    }, [dataType, graph])

    useEffect(() => {
        if (arr) {
            switch (graph) {
                case "temp":
                    setMax(Math.max(...arr) + 2)
                    setMin(Math.min(...arr) - 2)
                    break
                case 'wind':
                case 'uvi':
                case 'rain':
                case 'snow':
                    setMax(Math.max(...arr) + 1)
                    setMin(Math.min(...arr))
                    break
                case 'humidity':
                case 'preci':
                    setMax(100)
                    setMin(0)
                    break
                default:
                    setMax(100)
                    setMin(0)
                    break

            }
        }

    }, [arr, graph, pYArr])

    useEffect(() => {
        if (max) {
            switch (graph) {
                case "temp":
                    const total = min + max
                    const range = max - min
                    if (min <= -1 && max >= 0) {
                        setYLegend([parseInt(max), 0, parseInt(min)])
                        setYArr(
                            arr.map(m => {
                                return m <= 0 ? 50 + Math.abs(m) * (50 / Math.abs(min)) : 50 - m * (50 / max)
                            })
                        )
                    } else if (max <= -1) {
                        setYLegend([parseInt(max), parseInt(total / 2), parseInt(min)])
                        setYArr(
                            arr.map(m => {
                                return ((Math.abs(m) - Math.abs(max))) * (100 / Math.abs(range))
                            })
                        )

                    } else {
                        setYLegend([parseInt(max), parseInt(total / 2), parseInt(min)])
                        setYArr(
                            arr.map(m => {
                                return ((max) - m) * (100 / range)
                            })
                        )
                    }
                    break
                case 'wind':
                case 'rain':
                case 'snow':
                    setYLegend([max.toFixed(2), (max / 2).toFixed(2), 0 + "mm"])
                    setYArr(arr.map(m => {
                        return 100 - (m * (100 / max))
                    }))
                    setPYArr(pArr.map(m => {
                        return 100 - m
                    }))
                    break
                case 'humidity':
                case 'preci':
                    const maxVal = Math.max(...arr)
                    setYLegend([parseInt(max), parseInt(max / 2), 0 + "%"])
                    setYArr(arr.map(m => {
                        if(maxVal < 50) {
                            return 50 - m
                        } else {
                            return 100 - m
                        }
                    }))
                    break
                case 'uvi':
                    const check = (num) => {return num === 0}
                    setYLegend([max.toFixed(2), (max / 2).toFixed(2), 0])
                    setYArr(arr.map(m => {
                        if (arr.every(check)){
                            return 50 - (m * (50 / max))
                        } else {
                            return 100 - (m * (100 / max))
                        }
                    }))
                    break
                default:
                    break

            }
        }
   

    }, [graph, min, max, arr, pArr])
   
    return [arr, yLeg, yArr, rain, snow, icon, windDeg, pArr, pYArr]
}