import { localStorageName } from "../helpers/localStorage"

async function openWeather(lat, lon, setCurrentData, setOneCall) {
    const oneCallURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,current&units=metric&appid='
    const currentWeatherURL = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=metric&appid='
    setCurrentData(await fetchOW(currentWeatherURL, localStorageName.CURRENT))
    setOneCall(await fetchOW(oneCallURL, localStorageName.ONE_CALL))
}


async function fetchOW(url, localStorageName) {

    if (localStorage.localStorageName) {
        return await JSON.parse(localStorage.localStorageName)
    } else {
        const getData = await fetch(`${url}${process.env.REACT_APP_KEY}`)
        const data = await getData.json()
        localStorage.setItem(`${localStorageName}`, JSON.stringify(data))
        return await data
    }
}

export default openWeather