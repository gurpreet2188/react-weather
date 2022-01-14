import React, { useEffect, useState } from 'react';
import { useLoction } from '../fetch/location';
import GetData from '../fetch/data';
import { LoadContext } from './loadContext';


export function SetData() {
    const [stat, setStat] = useState(0)
    const { lat, lon } = useLoction()
    const [update, setUpdate] = useState(false)
    // 49.8537377 -97.2923063
    //const [lat, lon] = [1.4107, 103.8796] // sg
    //const [lat, lon] = [49.8537377,-97.2923063] // canada
    // const [lat ,lon] = [18.9754008,72.8415103] //mumbai
    const t = localStorage.getItem('time')
    const n = localStorage.getItem('name')
    const o = localStorage.getItem('main')
    const a = localStorage.getItem('air')

    useEffect(() => {
        const date = new Date()
        if (t && n && o && a) {
            if (parseInt(t) < date.getTime() - 600000) {
                setUpdate(true)
            } else {
                setUpdate(false)
            }
        } else if (t === null || n === null || o === null || a === null) {
            console.log('downloading weather info.....')
            GetData(lat, lon, setStat, stat)
        }
    }, [t, n, o, a, lat, lon, stat])


    useEffect(() => {
        if (lat && lon) {
            if (update) {
                GetData(lat, lon, setStat, stat)
            }
        }
    }, [lat, lon, t, n, o, a, stat, update])

    return (
        <>
            {(t && n && a && o) ? <LoadContext /> : "Waiting for Location..."}
        </>
    )
}