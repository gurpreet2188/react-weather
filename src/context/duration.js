import { useState, useEffect } from "react";

export function Time(data) {

    const [sunrise, setSunrise] = useState(false)
    const [day, setDay] = useState(false)

    useEffect(() => {
        const date = new Date().getHours()
        const dataDate = (type) => {
            return new Date(data.current[type] * 1000).getHours()
        }
        if (data) {
            if (date > dataDate("sunrise") && date < dataDate("sunset")) {
                setDay(true)
            } else if (date > dataDate("sunset") && date < dataDate("sunrise")) {
                setDay(false)
            } else if (date === dataDate("sunrise")) {
                setSunrise(true)
            } else {
                setSunrise(false)
            }
        }

    }, [data])

    return { sunrise, day }

}   