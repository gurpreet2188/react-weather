import React, { useState } from 'react';
import { Current } from './current';
import { Forecast } from './forecast';
import { Graphs } from './graphs'
export function Home () {
    const [panel, setPanel] = useState(false)
    const togglePanel = () => {
        !panel ? setPanel(true) : setPanel(false)
    }
    console.log(panel)
    return(
        <>
        <Current/>
        <div style={panel ? {display: 'none'}: {}}>
        <Forecast/>

        </div>
        <div style={!panel ? {display: 'none'}: {maxHeight: '30rem'}}>
            <Graphs/>
        </div>
        {/* <a href='#' onClick={togglePanel}>Test</a> */}
        </>
        
    )
}