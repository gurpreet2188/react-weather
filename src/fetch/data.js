import axios from 'axios';
export default function GetData(lat, lon, date, setStat) {
    return axios.all([
        axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=3&appid=${process.env.REACT_APP_KEY}`),
        axios.get(`${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_KEY}`),
        axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_KEY}`)
    ]).then(axios.spread((name, main, air) => {
        localStorage.setItem('time', JSON.stringify(date.getTime()))
        localStorage.setItem('name', JSON.stringify(name.data[0]))
        localStorage.setItem('main', JSON.stringify(main.data))
        localStorage.setItem('air', JSON.stringify(air.data))
        setStat(4)
    }))
}