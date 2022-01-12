import React, { useEffect, useState, useContext } from 'react';
import { Graph } from './svg/graph';
import { GlobalColors, GlobalData } from '../context/contexts';


export function Graphs({ type, setPoly, poly }) {
    const { textColor } = useContext(GlobalColors)
    const styles = {
        fill: textColor,
        fontSize: ".9rem",
        fontFamily: "'Barlow', serif",
        fontWeight: "100",
        letterSpacing: ".1rem",
        textAlign: 'right',
        transition: 'all .5s ease-in-out',
        textAnchor: 'left'
    }

    const { data } = useContext(GlobalData)
    const [stat, setstat] = useState(false)
    const [tempArr, setTempArr] = useState()
    const [dType, setDType] = useState(data.hourly)
    
    const [points, setPoints] = useState("")
    const [tempAxis, setTempAxis] = useState()
    const [snowArr, setSnowArr] = useState(false)
    const [rainArr, setRainArr] = useState(false)
    const [dots, setDots] = useState("")
    const [text, setText] = useState("")
    
    const xScale = [46, 82.28, 118.56, 154.84, 191.12, 227.4, 263.68, 299.96]
    const yScale = [5, 55, 105]
    const pctY = ["100%", "50%", "0%"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })


    const tempMax = tempArr ? parseInt(Math.max(...tempArr)) : 0
    const [tempRange, setTempRange] = useState([tempMax, parseInt((tempMax / 2)), 0])
    const [tempType, setTempType] = useState("+")
    const [tempYLegend, setTempYLegened] = useState()


    useEffect(() => {
        setSnowArr(dType.map(m => {
            if (dType === data.daily) {
                if (m.snow) {
                    return m.snow ? m.snow : 0;
                } else {
                    return
                }

            } else {
                if (m.snow) {
                    return m.snow ? m.snow["1h"] ? m.snow["1h"] : 0 : 0
                } else {
                    return
                }
            }
        }))

        setRainArr(dType.map(m => {
            if (dType === data.daily) {

                return m.rain ? m.rain : 0
            } else {

                return m.rain ? m.rain["1h"] ? m.rain["1h"] : 0 : 0
            }
        }))

        setTempArr(dType.slice(0, 8).map(m => {
            if (dType === data.daily) {
                return m.temp ? m.temp.day : 0
            } else {
                return m.temp ? m.temp : 0
            }
        }))
        // setTempArr([-5, -13, -14, -17, -11, -20, -20, -20])

    }, [dType])


    const rainMax = rainArr ? (Math.max(...rainArr) + 2).toFixed(2) : 0
    const rainRange = [rainMax, (rainMax / 2).toFixed(2), 0]
    const snowMax = snowArr ? (Math.max(...snowArr) + 2).toFixed(2) : 0
    const snowRange = [snowMax, (snowMax / 2).toFixed(2), 0]
    const uviY = ["12", "5", "0"].map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    // const tempY = tempRange.map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{m}</text> })
    const rainY = rainRange.map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{i === 2 ? m + "mm" : m}</text> })
    const snowY = snowRange.map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{i === 2 ? m + "mm" : m}</text> })
    const dates = data.daily?.map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="130">{new Date(m.dt * 1000).getDate()}</text> })
    const hours = data.hourly?.slice(0, 8).map((m, i) => { return <text style={styles} key={i} x={xScale[i] - 6} y="130">{new Date(m.dt * 1000).getHours()}</text> })

    const [graph, setGraph] = useState("temp")



    const switchGraph = (type) => {
        setPoly(false)
        setTimeout(
            () => {
                setGraph(type)
                setPoly(true)
            }
            , 300)
    }
    const graphPrec = () => switchGraph("prec")
    const graphRain = () => switchGraph("rain")
    const graphSnow = () => switchGraph("snow")
    const graphHumidity = () => switchGraph("humidity")
    const graphUVI = () => switchGraph("uvi")
    const graphTemp = () => switchGraph("temp")

    const [rSize, setRSize] = useState(4)
    const [infoStyle, setInfoStyle] = useState(false)

    const onClick = () => {
        setRSize(rSize === 4 ? 15 : 4)
        setInfoStyle(!infoStyle)
        // const time = setTimeout(() => {
        //     setRSize(4)
        //     setInfoStyle(false)
        // }, 8000)
    }


    useEffect(() => {
        type === 'h' ? setDType(data.hourly) : setDType(data.daily)

        if (tempArr) {
            if (parseInt(Math.min(...tempArr)) <= -1 && parseInt(Math.max(...tempArr)) >= 0) {
                setTempRange([parseInt(Math.max(...tempArr)) + 5, 0, parseInt(Math.min(...tempArr)) - 8])
                setTempType("-+")

            } else if (Math.max(...tempArr) <= 0) {
                const total = Math.min(...tempArr) + Math.max(...tempArr)
                setTempRange([Math.max(...tempArr), (total / 2).toFixed(1), Math.min(...tempArr)])
                console.log("test", tempArr)
                setTempType("-")

            } else {
                setTempRange([parseInt(Math.max(...tempArr)) + 5, parseInt((parseInt(Math.max(...tempArr)) / 2)), 0])

            }
        }


    }, [type, tempArr])

    useEffect(() => {
        if (tempArr) {
            if (parseInt(Math.min(...tempArr)) < 0) {
                setTempAxis(
                    tempArr.map(m => {
                        if (tempType === "-+") {
                            setstat(true)
                            return m <= 0 ? 50 + Math.abs(m) * (50 / Math.abs(tempRange[2])) : 50 - m * (50 / tempRange[0])
                        } else if (tempType === "-") {
                            setstat(true)
                            const range = Math.min(...tempArr) - Math.max(...tempArr)

                            return ((Math.abs(m) - Math.abs(tempRange[0])) * ((100) / Math.abs(range))).toFixed(2)
                        }
                    })
                )
            } else {
                setTempAxis(
                    tempArr.map(m => {
                        setstat(true)
                        return 100 - (m * (100 / tempRange[0]))
                    })
                )
            }
        }


    }, [tempRange, tempType, tempArr])

    useEffect(() => {
        setTempYLegened(tempRange.map((m, i) => { return <text style={styles} key={i} x="0" y={yScale[i]}>{parseInt(m)}</text> }))
    }, [dType, tempRange])


    useEffect(() => {

        switch (graph) {
            case "prec":
                setPoints((xScale.map((v, i) => {
                    return `${v},${100 - (100 * dType[i].pop)}`
                })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={100 - (100 * dType[i].pop)} r={rSize} /> })))
                setText((xScale.map((v, i) => {
                    return <text
                        dominantBaseline='middle'
                        style={{ fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - (100 * dType[i].pop)}>
                        {(100 * dType[i].pop).toFixed(0)}</text>
                })))

                break;

            case "rain":
                setPoints((xScale.map((v, i) => {
                    return `${v},${100 - ((rainArr ? rainArr[i] : 0) * (100 / rainMax))}`
                })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={100 - ((rainArr ? rainArr[i] : 0) * (100 / rainMax))} r={rSize} /> })))
                setText((xScale.map((v, i) => {
                    return <text
                        dominantBaseline='middle'
                        style={{ fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - ((rainArr ? rainArr[i] : 0) * (100 / rainMax))}>
                        {rainArr ? rainArr[i] : 0}</text>
                })))

                break;
            case "snow":
                setPoints((xScale.map((v, i) => {
                    return `${v},${100 - ((snowArr ? snowArr[i] : 0) * (100 / snowMax))}`
                })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={100 - ((snowArr ? snowArr[i] : 0) * (100 / snowMax))} r={rSize} /> })))
                setText((xScale.map((v, i) => {
                    return <text
                        dominantBaseline='middle'
                        style={{ fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - ((snowArr ? snowArr[i] : 0) * (100 / snowMax))}>
                        {snowArr ? snowArr[i] : 0}</text>
                })))

                break;
            case "humidity":
                setPoints((xScale.map((v, i) => { return `${v},${100 - dType[i].humidity}` })).join(" "))
                setDots((xScale.map((v, i) => { return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v} cy={100 - dType[i].humidity} r={rSize} /> })))
                setText((xScale.map((v, i) => {
                    return <text
                        dominantBaseline='middle'
                        style={{ fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - dType[i].humidity}>
                        {parseInt(dType[i].humidity)}</text>
                })))
                break
            case "uvi":
                setPoints((xScale.map((v, i) => { return `${v},${100 - (dType[i].uvi * 8.333)}` })).join(" "))
                setDots((xScale.map((v, i) => {
                    return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v}
                        cy={100 - (dType[i].uvi * 8.333)} r={rSize} />
                })))
                setText((xScale.map((v, i) => {
                    return <text
                        dominantBaseline='middle'
                        style={{ fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={100 - (dType[i].uvi * 8.333)}>
                        {parseInt(dType[i].uvi)}</text>
                })))
                break
            case "temp":
                //100 - ((tempArr[i]) * (100 / tempRange[0]))
                setPoints((xScale.map((v, i) => {

                    return `${v},${stat ? tempAxis[i] : 0}`
                })).join(" "))
                setDots((xScale.map((v, i) => {

                    return <circle key={i} style={{ transition: 'all .5s ease-in-out' }} id="sun" cx={v}
                        cy={stat ? tempAxis[i] : 0} r={rSize} />
                })))
                setText((xScale.map((v, i) => {
                    return <text
                        dominantBaseline='middle'
                        style={{ fill: textColor }}
                        className={infoStyle ? "forecast-data-chart-show-info" : "forecast-data-chart-hide-info"}
                        key={i} x={v}
                        y={stat ? tempAxis[i] : 0}>
                        {stat ? parseInt(tempArr[i]) : 0}</text>
                })))

                break
            default:
                break;
        }

    }, [graph, dType, rSize, infoStyle, tempAxis, tempArr, stat, rainArr, snowArr])
    //
    console.log(points)
    return (
        <div className='forecast-data-chart'>
            <Graph points={points} axisX={type === "d" ? dates : hours} axisY={graph === "uvi" ? uviY : graph === "temp" ? tempYLegend : graph === "rain" ? rainY : graph === "snow" ? snowY : pctY} show={poly} dots={dots} info={text} click={onClick} />
            <div className='forecast-data-chart-footer'>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "temp" ? "1" : "0.5" }} onClick={graphTemp}>Temp</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "rain" ? "1" : "0.5" }} onClick={graphRain}>Rain</button>
                {snowArr[0] ? <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "snow" ? "1" : "0.5" }} onClick={graphSnow}>Snow</button> : <></>}
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "prec" ? "1" : "0.5" }} onClick={graphPrec}>Preci.</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "humidity" ? "1" : "0.5" }} onClick={graphHumidity}>Humidity</button>
                <button className="forecast-data-chart-footer-btn" style={{ opacity: graph === "uvi" ? "1" : "0.5" }} onClick={graphUVI}>UVI</button>

            </div>

        </div>
    )


}