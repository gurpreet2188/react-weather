import { createContext, useState, useEffect} from "react";

export function Time(date, data) {
    const [sun, setSun] = useState()
    useEffect(() => {
        if(data) {
            if (date.getTime() >= new Date(data.current?.sunrise * 1000).getTime() && date.getTime() <= new Date(data.current?.sunset * 1000).getTime()) {
                setSun("sunrise")
            } else if (date.getTime() >= new Date(data.current?.sunset * 1000).getTime() && date.getTime() <= new Date(data?.daily[1]?.sunrise * 1000).getTime()) {
                setSun("sunset")
            }
        }
       
    }, [data])

    return {sun}
    
}   