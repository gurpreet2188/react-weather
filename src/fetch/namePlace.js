import axios from "axios"

export function namePlace(city, setlatlon, setSearchResults, locIndex) {
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_KEY}`)
        .then((res) => {
            console.log(res.data)
            setSearchResults([...res.data])
            if (locIndex !== undefined) {
                localStorage.setItem('location', JSON.stringify({
                    city: res.data[locIndex].name,
                    state: res.data[locIndex].state,
                    country: res.data[locIndex].country,
                    lat: res.data[locIndex].lat,
                    lon: res.data[locIndex].lon
                }))
                setlatlon(true)
            }
        }).catch(err => {
            console.log(err.message)
        })
}