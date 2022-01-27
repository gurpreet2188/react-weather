import { useContext, useState } from "react"
import { GlobalColors } from "../context/contexts"
import { Graphs } from "./graphs/main"
import { IconDaily } from "./svg/iconDaily"
import { IconHourly } from "./svg/iconHourly"
import { IconHumidity } from "./svg/iconHumidity"
import { IconPreci } from "./svg/iconPreci"
import { IconRain } from "./svg/iconRain"
import { IconSnow } from "./svg/iconSnow"
import { IconTemp } from "./svg/iconTemp"
import { IconUv } from "./svg/iconUv"


export function Forecast() {
    const { textColor } = useContext(GlobalColors)
    const [poly, setPoly] = useState(false)
    const [type, setType] = useState("h")
    const [showSnow, setShowSnow] = useState(true)
    const [showRain, setShowRain] = useState(true)
    const [graph, setGraph] = useState("temp")
    const switchType = () => { type === "h" ? setType("d") : setType("h") }

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
                            <IconHourly s={15} />
                        </div>
                        <div style={{ opacity: type === 'd' ? "0.5" : "0.25" }}>
                            <IconDaily s={15} />
                        </div>
                    </button>
                    <button className="forecast-header-switch-types">
                        <button onClick={graphTemp} style={{ ...btnStyles('temp') }}>
                            <IconTemp s={15} />
                        </button>
                        <button onClick={graphRain} style={{ ...btnStyles('rain'), display: showRain? "" : "none" }}>
                            <IconRain s={15} />
                        </button>
                        <button onClick={graphSnow} style={{ ...btnStyles('snow'), display: showSnow? "" : "none"  }}>
                            <IconSnow s={15} />
                        </button>
                        <button onClick={graphUVI} style={{ ...btnStyles('uvi') }}>
                            <IconUv s={15} />
                        </button>
                        <button onClick={graphPreci} style={{ ...btnStyles('preci') }}>
                            <IconPreci s={15} />
                        </button>
                        <button onClick={graphHumidity} style={{ ...btnStyles('humidity') }}>
                            <IconHumidity s={15} />
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