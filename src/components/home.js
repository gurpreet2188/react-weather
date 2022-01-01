import React, { useContext, useState } from 'react';
import { IconChart } from '../assets/icon-components/chart';
import { IconArrowUpDown } from './svg/iconArrow'
import { Current } from './current';
import { CurrentStats } from './current-stats';
import { Forecast } from './forecast';
import { Graphs } from './graphs'
import { GlobalColors } from '../context/contexts';
export function Home() {

    const [panel, setPanel] = useState(false)
    const { textColor } = useContext(GlobalColors)
    const togglePanel = () => !panel ? setPanel(true) : setPanel(false)


    return (
        <>
            <Current />
            <div className={!panel ? "home-show-stats" : "home-hide-stats"} style={{ transition: 'all .4s ease' }}>
                <CurrentStats />
            </div>
            <div className={panel ? "home-panel home-panel-up" : "home-panel home-panel-down"}>
                <button onClick={togglePanel} className={panel ? "home-panel-name-up " : "home-panel-name-down"} style={{ color: textColor, transition: 'all .4s ease' }}>
                    <div className={panel ? "home-panel-icon-up" : "home-panel-icon-down"} style={{ stroke: textColor, transition: 'all .4s ease' }}><IconArrowUpDown w={18} h={18} /></div>
                    <h3>forecast</h3>
                </button>
                <div className={panel ? "home-panel-show" : "home-panel-hide"} style={{ color: textColor, transition: 'all .4s ease 610ms' }}>
                    <Forecast />
                </div>
            </div>


        </>

    )
}