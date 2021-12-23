import axios from 'axios';
import { useContext, useEffect } from 'react';
import { globalStat, globalCount } from '../components/base';
import { useLoction } from './location';
export function GetData() {
    const {setStat} = useContext(globalStat)
    const {lat, lon} = useLoction()
    // const [lat,lon] = [1.4107 , 103.8796]
    const t = localStorage.getItem('time')
    const n = localStorage.getItem('name')
    const o = localStorage.getItem('ow_api')
    const a = localStorage.getItem('air')
    const date = new Date()
    console.log("running")
    const getData = () => {
        axios.all([
            axios.get(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=3&appid=${process.env.REACT_APP_KEY}`),
            axios.get(`${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_KEY}`),
            axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_KEY}`)
        ]).then(axios.spread((name, main, air) => {
            localStorage.setItem('name', JSON.stringify(name.data[0]))
            localStorage.setItem('ow_api', JSON.stringify(main.data))
            localStorage.setItem('air', JSON.stringify(air.data))
            setStat(true)
        }))
    }
    useEffect(() => {
        console.log(parseInt(t) < date.getTime() - 600000)
        if(lat && lon) {
            if(t && n && o && a) {
                if(parseInt(t) < date.getTime() - 600000) {
                    localStorage.setItem('time', JSON.stringify(date.getTime()))
                    console.log("test")
                    getData()
                }
            } else if(t === null || n === null || o === null || a === null){
                console.log('condition check')
                localStorage.setItem('time', JSON.stringify(date.getTime()))
                getData()
            } else {
                localStorage.setItem('time', JSON.stringify(date.getTime()))
                getData()
            }
            
        }
    
    },[lon])
    return (
        <></>
    )
}