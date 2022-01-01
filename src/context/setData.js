import React, { useEffect, useState } from 'react';
import { useLoction } from '../fetch/location';
import GetData from '../fetch/data';
import { LoadContext } from './loadContext';


export function SetData() {
    const date = new Date()
    const [stat, setStat] = useState(0)
    const { lat, lon } = useLoction()
    // const [lat, lon] = [1.4107, 103.8796]
    const t = localStorage.getItem('time')
    const n = localStorage.getItem('name')
    const o = localStorage.getItem('main')
    const a = localStorage.getItem('air')

    useEffect(() => {
        if (lat && lon) {
            if (t && n && o && a) {
                if (parseInt(t) < date.getTime() - 600000) {
                    GetData(lat, lon, date, setStat)
                }
            } else if (t === null || n === null || o === null || a === null) {
                console.log('else')
                GetData(lat, lon, date, setStat, stat)
            }
        }
    }, [lat, lon, t, n, o, a, stat])

    return (
        <>
            {(t && n && a && o) ? <LoadContext date={date} /> : "Waiting for Location..."}
        </>
    )
}