import axios from 'axios';
import { useContext, useEffect } from 'react';
import { globalStat, globalCount } from '../components/base';
import { useLoction } from './location';
export function GetData() {
    const {setStat} = useContext(globalStat)
    const {count, setCount} = useContext(globalCount)
    const {lat, lon} = useLoction()
    const date = new Date()
    const getData = () => {
        axios.all([
            axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=3&appid=${process.env.REACT_APP_KEY}`),
            axios.get(`${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_KEY}`)
        ]).then(axios.spread((name, main) => {
            localStorage.setItem('name', JSON.stringify(name.data[0]))
            localStorage.setItem('ow_api', JSON.stringify(main.data))
            setStat(true)
            setCount(count+ 1)
        }))
    }

    useEffect(() => {
        if(lat && lon) {
            if(localStorage.getItem('time') && localStorage.getItem('name') && localStorage.getItem('ow_api') ) {
                if(parseInt(localStorage.getItem('time')) < date.getTime() - 1800000) {
                    localStorage.setItem('time', JSON.stringify(date.getTime()))
                    getData()
                }
            } else if(localStorage.getItem('time') && (localStorage.getItem('name') === null || localStorage.getItem('ow_api') === null)){
                localStorage.setItem('time', JSON.stringify(date.getTime()))
                getData()
            } else {
                localStorage.setItem('time', JSON.stringify(date.getTime()))
                getData()
            }
            
        }
    
    })
    return (
        <></>
    )
}