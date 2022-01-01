import { useContext, useState } from "react"
import { GlobalColors, GlobalData } from "../context/contexts"
import IconAll from "./svg/iconWeather"
import { Graphs } from "./graphs"
import { IconChart } from './svg/iconChart'

export function Forecast() {
    const { data } = useContext(GlobalData)
    const {textColor} = useContext(GlobalColors)
    const size = { w: 30, h: 24 }
    const [poly, setPoly] = useState(false)
    const [type, setType] = useState("h")
    const switchType = () => { type === "h" ? setType("d") : setType("h") }

    const [graphs, setGraphs] = useState(false)
    const toggleGraphs = () => {
        setPoly(true)
        !graphs ? setGraphs(true) : setGraphs(false)
    }

    return (
        <div className="forecast">
            <div className="forecast-header">

                <a href="#" className="forecast-header-switch" onClick={switchType} style={{ color: textColor }}>
                    <h3 style={{opacity: type === 'h' ? "1": "0.5"}}>Hourly</h3>
                    <h3 style={{opacity: type === 'd' ? "1": "0.5"}}>Daily</h3>
                </a>
                <div className='forecast-header-chart' onClick={toggleGraphs} style={{ color: textColor, transition: 'all .5s ease', opacity: graphs ? ".8" : ".4", stroke:textColor }}>
                    <IconChart w={24} h={24} />
                </div>
            </div>
            <div className="forecast-data" style={{display: graphs? "none": ""}}>
                {type === "h" ? data?.hourly.map((m, i) => {
                    if (i >= 0 && i <= 5) {
                        return <div key={i} className={type === "h" ? "forecast-data-contents" : ""}>
                            <p className="forecast-data-content-temp">{parseInt(m.temp)}&deg;</p>
                            <div className="forecast-data-content-icons">

                                {<IconAll key={i} size={size.w} clouds={m.clouds} rain={m.rain ? true : false} id={m.weather[0].id} sun={
                                    (new Date(m.dt * 1000).getTime() < new Date(data.current.sunrise * 1000).getTime() || new Date(m.dt * 1000).getTime() > new Date(data.current.sunset * 1000).getTime()) ? "sunset" : "sunrise"} anim={true} />}
                            </div>
                            <p className="forecast-data-content-period">{new Date(m.dt * 1000).getHours()}</p>
                        </div>
                    }
                }) : type === "d" ? data?.daily.map((m, i) => {

                    if (i >= 0 && i <= 5) {
                        return <div key={i} className={type === "d" ? "forecast-data-contents" : ""}>
                            <p className="forecast-data-content-temp">{parseInt(m.temp.day)}&deg;</p>
                            <div className="forecast-data-content-icons">
                                {<IconAll key={i} size={size.w} clouds={m.clouds} rain={m.rain ? true : false} id={m.weather[0].id} sun="sunrise" anim={true} />}
                            </div>
                            <p className="forecast-data-content-period">{new Date(m.dt * 1000).getDate()}</p>
                        </div>
                    }
                }) : ""}

            </div>

            <div style={{ display: graphs ? "" : "none" }} >
                <Graphs type={type} setPoly={setPoly} poly={poly} />
            </div>
        </div>
    )
}