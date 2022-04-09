import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { latlonData } from '../context/setData';
import { gpsLoction } from '../fetch/gpslocation';
import { ipLocation } from '../fetch/ipLocation';
import { namePlace } from '../fetch/namePlace';
import { CommonIcons } from './svg/commonIcons';
// import { IconWeatherAll } from './svg/iconWeatherAll';
import { WeatherIcons } from './svg/weatherIcons';


export function Welcome({ load }) {
    const [city, setCity] = useState()
    const [ipErr, setIpErr] = useState()
    const [GPSerr, setGPSErr] = useState()
    const [searchCard, setSearchCard] = useState(false)
    const [searchErr, setSearchErr] = useState()
    const [searchResults, setSearchResults] = useState()
    const [searchReady, setSearchReady] = useState(false)
    const [inputVal, setInputVal] = useState('')
    const [location, setLocation] = useState(true)
    const [locIndex, setLocIndex] = useState()
    const { latlon, setlatlon } = useContext(latlonData)
    const [focus, setFocus] = useState(false)

    const [locOption, setLocOption] = useState(false)
    const [searchOption, setSearchOption] = useState(false)

    const gpsErrColor = GPSerr ? "red" : "#000"
    const ipErrColor = ipErr ? "red" : "#000"

    useEffect(() => {
        if (city) {
            namePlace(city, setSearchResults)
        }
    }, [city, locIndex])

    useEffect(()=>{
        if(inputVal === ''){
            setCity()
        }
    },[inputVal])


    useEffect(() => {
        if (locIndex !== undefined) {
            localStorage.setItem('location', JSON.stringify({
                city: searchResults[locIndex].name,
                state: searchResults[locIndex].state,
                country: searchResults[locIndex].country,
                lat: searchResults[locIndex].lat,
                lon: searchResults[locIndex].lon
            }))
            setlatlon(true)
        }
    }, [searchOption, searchResults])

    const onSubmitSearch = (e) => {
        e.preventDefault()
        setCity(inputVal)
        setLocation(false)
    }


    const clearBtn = () => {
        if (inputVal) {
            setInputVal('')
        }

    }

    const optionsTranslate = {
        transform: `translateX(${locOption ? '20%' : searchOption ? '-20%' : 'calc(100vw / 20)'}) translateY(${load ? '300%' : '0'})`,
        opacity: load ? 0 : 1
    }

    const iconTransform = {
        // transform: `scale(${load ? 10 : 1})`,
        opacity: load ? 0 : 0.5,
        transformOrigin: 'center'
    }

    console.log(locIndex)

    const btnStyle = `
        .btn-border {
            border: 1px solid rgba(var(--color-fg), ${locOption || searchOption ? 0.0 : 0.5});
        }
    `

    return (
        <>
            <style>
                {btnStyle}
            </style>
            <div className='welcome'>
                <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 1 }} className='welcome-main'>
                    <motion.div 
                    animate={{ rotate: load ? 360 : 180, opacity: load ? 0 : 0.2,  scale: load ? 40 : 1}} 
                    transition={{ duration: 2 }} 
                    initial={{ opacity: 1 }} 
                    exit={{ opacity: 0.2 }} 
                    className='welcome-main-image' 
                    style={{ ...iconTransform }}>
                       <WeatherIcons s={85} icon='sun'/>
                    </motion.div>

                    <div className='welcome-main-options' style={{ ...optionsTranslate }}>
                        <div className='welcome-main-options-location'>
                            <div className={`welcome-main-options-location-btns`} style={{ transform: `translateX(${locOption ? '0%' : '-100%'})` }}>
                                <CommonIcons s={22} icon='location' />
                                <button onClick={() => {
                                    gpsLoction(setlatlon, setGPSErr)
                                    setIpErr()
                                }} className='welcome-main-options-location-btns-btn'>Precise</button>
                                <button onClick={() => {
                                    ipLocation(setCity, setIpErr, setLocIndex)
                                    setGPSErr()

                                }} className='welcome-main-options-location-btns-btn'>Approx</button>
                                <motion.div className='welcome-main-options-location-btns-err' animate={{ opacity: (ipErr || GPSerr) ? 1 : 0 }} initial={{ opacity: 0 }} exit={{ opacity: 1 }}>
                                    <p>{ipErr || GPSerr ? `${GPSerr ? "GPS " : ipErr ? '' : ''}Error!!: Please try the other location methods or use Search.`: ""} </p>
                                </motion.div>
                            </div>
                            <button onClick={() => {
                                setLocOption(!locOption)
                                setSearchOption(false)
                                setGPSErr()
                                setIpErr()
                            }} className='welcome-main-options-location-btn btn-border'>
                                <CommonIcons s={locOption ? 18 : 24} icon={locOption ? 'cross' : 'location'} />
                            </button>
                        </div>
                        <span className='welcome-main-options-divider' ></span>
                        <div className='welcome-main-options-search'>

                            <div className='welcome-main-options-search-main'>
                                <button onClick={() => {
                                    setSearchOption(!searchOption)
                                    setLocOption(false)
                                }} className='welcome-main-options-search-main-btn btn-border'>
                                    <CommonIcons s={searchOption ? 24 : 24} icon='search' />
                                </button>
                                <form className='welcome-main-options-search-main-form' onSubmit={onSubmitSearch} style={{ transform: `translateX(${searchOption ? '0%' : '100%'})` }}>
                                    <input className='welcome-main-options-search-main-form-input' value={inputVal} onChange={(e) => { setInputVal(e.target.value) }} placeholder='Search City...'></input>
                                    {searchResults && inputVal && city ? <button className='welcome-main-options-search-main-form-input-btn' onClick={()=>{
                                        setInputVal('')
                                        setCity()
                                    }}>
                                        <CommonIcons s={18} icon='cross'/>
                                    </button>:  <button type='submit' className='welcome-main-options-search-main-form-input-btn' disabled={inputVal === '' ? true : false} style={{ opacity: inputVal === '' ? 0.5 : 1 }}>
                                        <CommonIcons s={18} icon='arrow'/>
                                    </button>}
                                   
                                </form>
                            </div>

                            <motion.div className='welcome-main-options-search-results' animate={{ y: (searchResults && searchOption) ? 0 : 500, opacity: (searchResults && searchOption) ? 1 : 0 }} initial={{ y: 500, opacity: 0 }} exit={{ y: 0, opacity: 1, x: 100 }} transition={{ duration: 0.1 }}>
                                {searchResults ? searchResults.map((m, i) => {
                                    return <button key={i} onClick={() => { setLocIndex(i) }} disabled={m.err === true ? true : false} className='welcome-main-options-search-results-btn'><span>{m.name}</span><br /> {m.state ? m.state + ' /' : ""} {m.country}</button>
                                }) : null}
                            </motion.div>


                        </div>

                    </div>

                </motion.div>

            </div>
        </>
    )
}

//style={{ opacity: searchResults ? 1 : 0, display: searchOption ? "" : 'none' }}