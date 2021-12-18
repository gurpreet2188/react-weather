import axios from 'axios';
import { useContext } from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { globalStat, globalData, globalCount } from '../components/base';
import { useLoction } from './location';

export function GetData() {
    // const {data, setData, locName, setLocName} = useContext(globalData)
    const setStat = useContext(globalStat)
    const {count, setCount} = useContext(globalCount)
    // const count = useContext(globalCount)
    const { lat, lon } = useLoction()
    const date = new Date()
    const getData = () => {
        axios.get(`${process.env.REACT_APP_URL}/onecall?lat=${1.4107333}&lon=${103.8796131}&units=metric&appid=${process.env.REACT_APP_KEY}`)
                .then(res => {
                    localStorage.setItem('ow_api', JSON.stringify(res.data))
                   
                    // setData(res.data)
                    setStat(true)
                    setCount(count+ 1)
                    // console.log(data)
                })

                axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${1.4107333}&lon=${103.8796131}&limit=3&appid=${process.env.REACT_APP_KEY}`)
                .then(res => {
                    // setLocName(res.data)
                    localStorage.setItem('name', res.data[0]?.name)
                })
    }

    useEffect(() => {
        // if(lat && lon) {
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
            
        // }
    
    }, [lon])
    console.log(count)
    return (
        <></>
    )
}