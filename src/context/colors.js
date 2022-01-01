import { useState, useEffect } from "react";

export function Colors(sun, data) {
    const [hsl, setHSL] = useState({
        h: 0, s: 0, l: 0
    })
    const [textColor, setFontColor] = useState("#000")

    const date = new Date().getHours()
    useEffect(() => {
        if (sun === "sunrise") {
            if (date === new Date(data?.current.sunset * 1000).getHours()) {
                setHSL({ h: 33, s: 100, l: 52 })

            } else if (date === new Date(data?.current.sunrise * 1000).getHours()) {
                setHSL({ h: 33, s: 100, l: 52 })
            }
            else {
                setHSL({ h: 184, s: 100, l: 77 })
            }

        } else if (sun === "sunset") {
            setHSL({ h: 263, s: 100, l: 26 })
        }
    }, [sun])

    useEffect(() => {
        hsl.l > 50 ? setFontColor("#000") : setFontColor("#fff")
    }, [hsl.l])

    return { textColor, hsl }
}