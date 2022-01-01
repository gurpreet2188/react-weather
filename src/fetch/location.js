import { useState, useEffect } from "react";


export function useLoction() {
    const [lat, setLan] = useState()
    const [lon, setLon] = useState()
    useEffect(() => {
        // const fetchD = async () => {
            navigator.geolocation.getCurrentPosition((pos) => {
                setLan(pos.coords.latitude)
                setLon(pos.coords.longitude)
            })
            // console.log(lat, lon)
            
        // }

        // fetchD()
    },[lat, lon])

    return {lat, lon}
}