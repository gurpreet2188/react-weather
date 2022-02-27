import { useContext, useState } from "react"
import { GlobalColors } from "../context/contexts"
import { Graphs } from "./graphs/main"
import { useResponsive } from "./responsive"
import { CommonIcons } from "./svg/commonIcons"
import { IconWeatherAll } from "./svg/iconWeatherAll"


export function Forecast() {
    const { textColor } = useContext(GlobalColors)
    const [poly, setPoly] = useState(false)
    const [type, setType] = useState("h")
    const [showSnow, setShowSnow] = useState(true)
    const [showRain, setShowRain] = useState(true)
    const [graph, setGraph] = useState("temp")
    const switchType = () => { type === "h" ? setType("d") : setType("h") }
    const {iconSize} = useResponsive()
    const switchGraph = (type) => {
        setGraph(type)
        setPoly(true)
    }

    const graphPreci = () => switchGraph("preci")
    const graphRain = () => switchGraph("rain")
    const graphSnow = () => switchGraph("snow")
    const graphHumidity = () => switchGraph("humidity")
    const graphUVI = () => switchGraph("uvi")
    const graphTemp = () => switchGraph("temp")
    const graphWind = () => switchGraph("wind")

    const btnStyles = (g) => {
        return {
            opacity: graph === g ? 0.5 : 0.25,
            background: "transparent"
        }
    }

    return (
        <div className="forecast">
            <div className="forecast-header">
                <div className="forecast-header-switch" style={{ color: textColor }}>
                    <button onClick={switchType} className="forecast-header-switch-time">
                        <div style={{ opacity: type === 'h' ? "0.5" : "0.25" }}>
                        <CommonIcons s={iconSize} icon='clock'/>
                        </div>
                        <div style={{ opacity: type === 'd' ? "0.5" : "0.25" }}>
                        <CommonIcons s={iconSize} icon='days'/>
                        </div>
                    </button>
                    <button className="forecast-header-switch-types">
                        <button onClick={graphTemp} style={{ ...btnStyles('temp') }}>
                            <CommonIcons s={iconSize} icon='temp'/>
                        </button>
                        <button onClick={graphHumidity} style={{ ...btnStyles('humidity') }}>
                        <CommonIcons s={iconSize} icon='humidity'/>
                        </button>
                        {/* <button onClick={graphPreci} style={{ ...btnStyles('preci') }}>
                            <IconPreci s={iconSize} />
                        </button> */}
                        <button onClick={graphUVI} style={{ ...btnStyles('uvi') }}>
                        <CommonIcons s={iconSize} icon='uv'/>
                        </button>
                        <button onClick={graphWind} style={{ ...btnStyles('wind') }}>
                        <CommonIcons s={iconSize} icon='wind'/>
                        </button>
                        <button onClick={graphRain} style={{ ...btnStyles('rain'), display: showRain? "" : "none" }}>
                        <IconWeatherAll size={iconSize} clouds={0} rain={true} snow={false} day={true} id={501} />
                        </button>
                        <button onClick={graphSnow} style={{ ...btnStyles('snow'), display: showSnow? "" : "none"  }}>
                        <IconWeatherAll size={iconSize} clouds={0} rain={false} snow={true} day={true} id={501} />
                        </button>
                    </button>
                </div>
                <button className="forecast-header-border"></button>
            </div>
            <div>
                <Graphs type={type} setPoly={setPoly} poly={poly} setShowRain={setShowRain} setShowSnow={setShowSnow} graph={graph} />
            </div>
        </div>
    )
}