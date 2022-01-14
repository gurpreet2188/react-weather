import { useState, useEffect } from "react";

export function Colors(sunrise, day) {
    const [hsl, setHSL] = useState({
        h: 0, s: 0, l: 0
    })
    const [textColor, setFontColor] = useState("#000")

    useEffect(() => {
        if (day) {
            setHSL({ h: 184, s: 100, l: 77 })
        } else if (!day) {
            setHSL({ h: 263, s: 100, l: 26 })
        } else if (sunrise) {
            setHSL({ h: 33, s: 100, l: 52 })
        } else {
            setHSL({ h: 33, s: 100, l: 52 })
        }
    }, [sunrise, day])

    useEffect(() => {
        hsl.l > 50 ? setFontColor("#000") : setFontColor("#fff")
    }, [hsl.l])

    return { textColor, hsl }
}