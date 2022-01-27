import { useState, useEffect } from "react";

export function Colors(sunrise, day) {
    const [hsl, setHSL] = useState({
        h: 0, s: 0, l: 0
    })
    const [hslSec, setHSLSec] = useState({
        h: 0, s: 0, l: 0
    })
    const [textColor, setFontColor] = useState("#000")

    useEffect(() => {
        if (day) {
            setHSL({ h: 180, s: 100, l: 80 })
            setHSLSec({ h: 148, s: 100, l: 80 })
        } else if (!day) {
            setHSL({ h: 264, s: 23, l: 26 })
            setHSLSec({ h: 245, s: 30, l: 16 })
        } else if (sunrise) {
            setHSL({ h: 33, s: 100, l: 52 })
        } else {
            setHSL({ h: 33, s: 100, l: 52 })
        }
    }, [sunrise, day])

    useEffect(() => {
        hsl.l > 50 ? setFontColor("#000") : setFontColor("#fff")
    }, [hsl.l])

    return { textColor, hsl, hslSec }
}