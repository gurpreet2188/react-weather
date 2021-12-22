import { useState } from "react"
import { IconClouded } from "../assets/icon-components/clouded"

export function Hourly() {
    const data = JSON.parse((localStorage.getItem('ow_api')))
    const size = { w: 20, h: 20 }
    const [type, setType] = useState("h")
    const switchType = () => { type === "h" ? setType("d") : setType("h") }
    return (
        <div className="forecast-main">
            <div className="forecast-header">
                <h3>Forecast</h3>
                <div className="forecast-select" onClick={switchType}>
                    <h3 className={type === "h" ? "forecast-selected" : "forecast-not-selected"}>Hourly</h3>
                    <h3 className={type === "d" ? "forecast-selected" : "forecast-not-selected"}>Daily</h3>

                </div>

            </div>
            <div className="forecast">
                {type === "h" ? data?.hourly.map((m, i) => {

                    if (i >= 0 && i <= 9) {
                        if (new Date().getHours() < new Date(m.dt * 1000).getHours()) {
                            return <div key={i} className="forecast-content">
                                <p className="forecast-content-text">{parseInt(m.temp)}&deg;</p>
                                {m.clouds > 50 ? <IconClouded w={size.w} h={size.h} /> : ""}
                                <p className="forecast-content-text">{new Date(m.dt * 1000).getHours()}</p>
                            </div>
                        }
                    }
                }) : type === "d" ? data?.daily.map((m, i) => {

                    if (i >= 0 && i <= 5) {
                        // console.log(new Date(c_t).getDate())
                        if (new Date().getDate() < new Date(m.dt * 1000).getDate()) {
                            return <div key={i} className="forecast-content">
                                <p className="forecast-content-text">{parseInt(m.temp.day)}&deg;</p>
                                {m.clouds > 50 ? <IconClouded w={size.w} h={size.h} /> : ""}
                                <p className="forecast-content-text">{new Date(m.dt * 1000).getDate()}</p>
                            </div>
                        }
                    }
                }) : ""}

            </div>
        </div>
    )
}