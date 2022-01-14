import { useContext, useState } from "react"
import { GlobalColors, GlobalData } from "../context/contexts"
import IconAll from "./svg/iconWeather"
import { Graphs } from "./graphs/main"
import { IconChart } from './svg/iconChart'

export function Forecast() {
    const { data } = useContext(GlobalData)
    const { textColor } = useContext(GlobalColors)
    const size = { w: 30, h: 24 }
    const [poly, setPoly] = useState(false)
    const [type, setType] = useState("h")
    const switchType = () => { type === "h" ? setType("d") : setType("h") }
    const [graphs, setGraphs] = useState(false)
    const toggleGraphs = () => {
        setPoly(true)
        !graphs ? setGraphs(true) : setGraphs(false)
    }

    const date = (data, dataType) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const duration = dataType === 'd' ? days[new Date(data).getDay()] : new Date(data).getHours()
        return duration
    }

    const forecastDiv = (m, i, sunType, dataType) => {
        if (i >= 0 && i <= 5) {
            return <div key={i} className="forecast-data-contents">
                <p className="forecast-data-content-temp">{parseInt(m.temp.day ? m.temp.day : m.temp)}&deg;</p>
                <div className="forecast-data-content-icons">

                    {<IconAll key={i} size={size.w} clouds={m.clouds} rain={m.rain ? true : false} id={m.weather[0].id} sun={sunType} anim={true} />}

                </div>
                {/* <p  className="forecast-data-content-extra">{m?.rain ? m.rain[Object.keys(m.rain)]: 0}</p> */}
                <p className="forecast-data-content-period">{date(m.dt * 1000, dataType)}</p>
            </div>

        }

    }

    const setHourlyIcon = (m) => {
        if (new Date(m.dt * 1000).getTime() < new Date(data.current.sunrise * 1000).getTime() || new Date(m.dt * 1000).getTime() > new Date(data.current.sunset * 1000).getTime()) {
            return "sunset"
        } else {
            return "sunrise"
        }
    }

    return (
        <div className="forecast">
            <div className="forecast-header">

                <button className="forecast-header-switch" onClick={switchType} style={{ color: textColor }}>
                    <h3 style={{ opacity: type === 'h' ? "1" : "0.5" }}>Hourly</h3>
                    <h3 style={{ opacity: type === 'd' ? "1" : "0.5" }}>Daily</h3>
                </button>
                <div className='forecast-header-chart' onClick={toggleGraphs} style={{ color: textColor, transition: 'all .5s ease', opacity: graphs ? ".8" : ".4", stroke: textColor }}>
                    <IconChart w={24} h={24} />
                </div>
            </div>
            <div className="forecast-data" style={{ display: graphs ? "none" : "" }}>
                {type === "h" ? data?.hourly.map((m, i) => {
                    return forecastDiv(m, i, setHourlyIcon(m), "h")
                }) : type === "d" ? data?.daily.map((m, i) => {
                    return forecastDiv(m, i, "sunrise", "d")
                })
                    : ""}
            </div>

            <div style={{ display: graphs ? "" : "none" }} >
                <Graphs type={type} setPoly={setPoly} poly={poly} />
            </div>
        </div>
    )
}