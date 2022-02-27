import React, { useEffect, useState } from 'react';

export function useResponsive() {
    const [desktop, setDesktop] = useState(false)
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    const [iconSize, setIconSize] = useState(24)
    const [weatherIconSize, setWeatherIconSize] = useState(100)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth)
        })
        if (windowSize > 1200) {
            setDesktop(true)
            setIconSize(28)
            setWeatherIconSize(100)
        } else if (windowSize > 700) {
            setDesktop(false)
            setIconSize(26)
            setWeatherIconSize(100)
        } else {
            setDesktop(false)
            setIconSize(18)
            setWeatherIconSize(100)
        }
    }, [window.innerWidth])


    return { iconSize, weatherIconSize, desktop }

}