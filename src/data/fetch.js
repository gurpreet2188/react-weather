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
            axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=3&appid=${process.env.REACT_APP_KEY}`),
            axios.get(`${process.env.REACT_APP_URL}/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.REACT_APP_KEY}`)
        ]).then(axios.spread((name, main) => {
            localStorage.setItem('name', name.data[0]?.name)
            localStorage.setItem('ow_api', JSON.stringify(main.data))
            setStat(true)
            setCount(count+ 1)
            console.log(name.data)
        }))
    }

    useEffect(() => {
        if(lat && lon) {
            console.log(date.getTime())
            if(localStorage.getItem('time')) {
                if(parseInt(localStorage.getItem('time')) < parseInt(date.getTime()) - 60000) {
                   
                    localStorage.setItem('time', JSON.stringify(date.getTime()))
                    getData()
                } else {
                    console.log(false)
                }

            } else {
                localStorage.setItem('time', JSON.stringify(date.getTime()))
                getData()
            }
            
        }
    
    })
    console.log(count)
    return (
        <></>
    )
}