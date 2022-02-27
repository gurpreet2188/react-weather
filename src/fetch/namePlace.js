import axios from "axios"

export function namePlace(city, setSearchResults) {
    axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${process.env.REACT_APP_KEY}`)
        .then((res) => {
            console.log(res.data.length === 0)
            if(res.data.length === 0){
                setSearchResults([{name: city + " not found", country: "Search for city name for e.g: London", err: true}])
            }else {
                setSearchResults([...res.data])
            }
        }).catch(err => {
            console.log(err.message)
        })
}