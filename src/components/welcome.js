import axios from 'axios';
import React, { useState, useEffect, useContext, forwardRef, useRef, useImperativeHandle } from 'react';
import { latlonData } from '../context/setData';
import { gpsLoction } from '../fetch/gpslocation';
import { ipLocation } from '../fetch/ipLocation';
import { namePlace } from '../fetch/namePlace';
import { IconArrowUpDown } from './svg/iconArrow';
import { IconCross } from './svg/iconCross';
import { IconLocation } from './svg/iconLocation';
import { IconSearch } from './svg/iconSearch';


export function Welcome({ load }) {
    const [city, setCity] = useState()
    const [ipErr, setIpErr] = useState()
    const [GPSerr, setGPSErr] = useState()
    const [search, setSearch] = useState()
    const [searchErr, setSearchErr] = useState()
    const [searchResults, setSearchResults] = useState()
    const [searchReady, setSearchReady] = useState(false)
    const [inputVal, setInputVal] = useState('')
    const [location, setLocation] = useState(true)
    const [locIndex, setLocIndex] = useState()
    const {latlon ,setlatlon} = useContext(latlonData)

    const gpsErrColor = GPSerr ? "red" : "#000"
    const ipErrColor = ipErr ? "red" : "#000"

    useEffect(() => {
        if (city) {
            namePlace(city, setlatlon, setSearchResults, locIndex)
        }
    }, [city, locIndex])


    const onSubmitSearch = (e) => {
        e.preventDefault()
        setCity(inputVal)
        setLocation(false)
    }

    return (
        <div style={{ background: "linear-gradient(168.63deg, #FFCA99 0%, rgba(153, 206, 255, 0.38) 99.26%)", opacity: load ? 1 : 0, transition: "opacity 1s ease" }} className='welcome'>
            <h1 className='welcome-title'>Weather</h1>
            <div className='welcome-card'>
                <h3 className='welcome-card-title'>City</h3>
                <form className='welcome-card-search' style={{ fill: "#000" }} onSubmit={onSubmitSearch}>
                    <div className='welcome-card-search-icon'>
                        <IconSearch s={15} />
                    </div>
                    <input className='welcome-card-search-input' value={inputVal} placeholder='Enter city name...' onChange={(e)=> {setInputVal(e.target.value)}} />
                    {searchResults ? <button onClick={() => {
                        setInputVal('')
                        setSearchResults()
                    }}
                        className='welcome-card-search-input-btn-close'
                        style={{ fill: '#000' }}>
                        <IconCross s={12} />
                    </button> :
                        <button type='submit' className='welcome-card-search-input-btn' style={{ stroke: '#000', opacity: search ? 0.4 : 0.2 }}><IconArrowUpDown w={13} h={13} /></button>}
                </form>
                <div className='welcome-card-search-results' style={{ opacity: searchResults ? 1 : 0 }}>
                    {searchResults ? searchResults.map((m, i) => {
                        return <button key={i} onClick={()=>{setLocIndex(i)}} className='welcome-card-search-results-btn'>{m.name} / {m.state ? m.state + ' /' : ""} {m.country}</button>
                    }) : null}
                </div>
                <div className='welcome-card-location'>
                    <div className='welcome-card-location-icon' style={{ fill: "#000", stroke: "#000" }}>
                        <IconLocation s={15} />
                    </div>
                    <button onClick={ ()=>{
                        gpsLoction(setlatlon, setGPSErr)
                    }} className='welcome-card-location-btn'>Precise</button>
                    <button onClick={()=> {
                        ipLocation(setCity, setIpErr)
                        setLocIndex(0)}} className='welcome-card-location-btn'>Approx.</button>
                </div>
            </div>
        </div>
    )
}