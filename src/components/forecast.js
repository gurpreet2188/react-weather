import { useState } from "react"
import { IconClouded } from "../assets/icon-components/clouded"
import { IconCloudedSun } from "../assets/icon-components/cloudedSun"
import { IconSun } from "../assets/icon-components/sun"

export function Forecast({type}) {
    const data = JSON.parse((localStorage.getItem('ow_api')))
    const size = { w: 24, h: 24 }
    
    return (
        <div className="forecast-main">
            <div className="forecast">
                {type === "h" ? data?.hourly.map((m, i) => {
                    if (i >= 0 && i <= 5) {
                            return <div key={i} className={type === "h" ? "forecast-content" : ""}>
                                <p className="forecast-content-text">{parseInt(m.temp)}&deg;</p>
                                <div className="forecast-icons">
                                    {(m.clouds >= 75) ? <IconClouded w={size.w} h={size.h} anim={false} /> :
                                        (m.clouds >= 26 && m.clouds <= 74) ? <IconCloudedSun w={size.w} h={size.h} anim={false}/> :
                                            (m.clouds <= 25 && m.clouds >= 0) ? <IconSun w={size.w} h={size.h} anim={false} /> : ""}
                                </div>
                                <p className="forecast-content-text">{new Date(m.dt * 1000).getHours()}</p>
                            </div>
                    }
                }) : type === "d" ? data?.daily.map((m, i) => {

                    if (i >= 0 && i <= 6) {
                        // console.log(new Date(c_t).getDate())
                        if (new Date().getDate() < new Date(m.dt * 1000).getDate()) {
                            return <div key={i} className={type === "d" ? "forecast-content" : ""}>
                                <p className="forecast-content-text">{parseInt(m.temp.day)}&deg;</p>
                                <div className="forecast-icons">
                                {(m.clouds >= 75) ? <IconClouded w={size.w} h={size.h} anim={false} /> :
                                        (m.clouds >= 26 && m.clouds <= 74) ? <IconCloudedSun w={size.w} h={size.h} anim={false}/> :
                                            (m.clouds <= 25 && m.clouds >= 0) ? <IconSun w={size.w} h={size.h} anim={false} /> : ""}
                                </div>
                                <p className="forecast-content-text">{new Date(m.dt * 1000).getDate()}</p>
                            </div>
                        }
                    }
                }) : ""}

            </div>
        </div>
    )
}