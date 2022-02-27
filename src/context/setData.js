import React, { createContext, useEffect, useState } from 'react';
import { useLoction } from '../fetch/gpslocation';
import GetData from '../fetch/data';
import { LoadContext } from './loadContext';
import { Welcome } from '../components/welcome';
import { Loading } from '../components/loading';
import { countryName } from '../fetch/countryName';

export const latlonData = createContext(null)

export function SetData() {
    // const [loadWelcome, setLoadWelcome] = useState(false)
    const [stat, setStat] = useState(false)
    const [delay, setDelay] = useState(false)
    const [latlon, setlatlon] = useState(false)
    const [lat, setLat] = useState()
    const [lon, setLon] = useState()

    const t = localStorage.getItem('time')
    const n = localStorage.getItem('name')
    const o = localStorage.getItem('main')
    const a = localStorage.getItem('air')

    useEffect(() => {
        if (localStorage.getItem('location') !== null) {
            const pos = JSON.parse(localStorage.getItem('location'))
            setLat(pos.lat)
            setLon(pos.lon)
        }
    }, [latlon, localStorage.getItem('location')])

    useEffect(() => {
        const date = new Date().getTime() - 600000 // 10 min
        const dateLonger = new Date().getTime() - 604800000 // 7 days 
        if (t && n && o && a) {
            // setLoadWelcome(false)
            setTimeout(() => { setDelay(true) }, 1000)
            setStat(true)

            if (parseInt(t) <= dateLonger) {
                localStorage.clear() // detele all data and reset to welcome page if data is 1 week or more old
            }

            if (parseInt(t) <= date) {
                if (lat && lon) {
                    console.log('test data')
                    GetData(lat, lon)
                    countryName()
                }
            }
        } else if (t === null || n === null || o === null || a === null) {
            if (lat && lon) {
                setStat(true)
                // setLoadWelcome(false)
                setTimeout(() => { setDelay(true) }, 1000)
                GetData(lat, lon)
                countryName()
            } else {
                setDelay(false)
            }

        } else {
            setDelay(false)
        }
    }, [lat, lon, t, n, o, a])

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoadWelcome(true)
    //     }, 500)
    // }, [])

   

    return (
        <latlonData.Provider value={{latlon, setlatlon}}>
            {delay ? <LoadContext /> : <Welcome load={stat} />}
        </latlonData.Provider>
    )
}