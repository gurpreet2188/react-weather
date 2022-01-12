import { useState, useEffect } from "react"

export function useGraphData(data, graph) {
    const [rawArr, setRawArr] = useState() // use raw Array to calculate the graph
    const [arr, setArr] = useState() // use this array to send it forwared to base.js with decimal removed
    const [min, setMin] = useState()
    const [max, setMax] = useState()
    const [yLeg, setYLegend] = useState()
    const [yArr, setYArr] = useState()
    const [snow, setSnow] = useState([0])
    const [rain, setRain] = useState([0])

    useEffect(() => {
        setArr(data.slice(0, 8).map(m => {
            switch (graph) {
                case "temp":
                    return m.temp ? m.temp.day ? m.temp.day : m.temp : 0
                case 'rain':
                    return m.rain ? m.rain["1h"] ? m.rain["1h"] : m.rain : 0
                case 'snow':
                    return m.snow ? m.snow["1h"] ? m.snow["1h"] : m.snow : 0
                case 'humidity':
                    return m.humidity
                case 'preci':
                    return Math.round(m.pop * 100)
                case 'uvi':
                    return m.uvi
                default:
                    break

            }
        }))


        setSnow(
            data.slice(0, 8).map(m => {
                return m.snow ? m.snow : 0
            })
        )
        setRain(
            data.slice(0, 8).map(m => {
                return m.rain ? m.rain : 0
            })

        )


    }, [data, graph])

    useEffect(() => {
        if (arr) {
            switch (graph) {
                case "temp":
                    setMax(Math.max(...arr) + 2)
                    setMin(Math.min(...arr) - 2)
                    break
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
                    break

            }
        }

    }, [arr, graph])

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
                        setYLegend([max, parseInt(total / 2), parseInt(min)])
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
                case 'rain':
                case 'snow':
                    setYLegend([max, (max / 2).toFixed(2), 0 + "mm"])
                    setYArr(arr.map(m => {
                        console.log(m)
                        return 100 - (m * (100 / max))
                    }))
                    break
                case 'humidity':
                case 'preci':
                    setYLegend([parseInt(max), parseInt(max / 2), 0 + "%"])
                    setYArr(arr.map(m => {
                        console.log(m)
                        return 100 - m
                    }))
                    break
                case 'uvi':
                    setYLegend([max, (max / 2), 0])
                    setYArr(arr.map(m => {
                        console.log(m)
                        return 100 - (m * (100 / max))
                    }))
                    break
                default:
                    break

            }
        }

    }, [graph, min, max, arr])



    return [arr, yLeg, yArr, rain, snow]
}