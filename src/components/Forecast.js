import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { RiTimeLine, RiTempColdLine, RiCalendarLine, RiDropLine, RiContrastDrop2Line, RiSunLine, RiSnowyLine, RiRainyLine, RiWindyLine } from 'react-icons/ri'
import useWindowSIze from '../customHooks/useWindowSIze'

function Forecast() {
    const screenSize = useWindowSIze()
    return (
        <div className='flex flex-col justify-center items-start h-[100%] gap-4'>
            <IconContext.Provider value={{ className: 'h-[1.1rem] w-[1.1rem]' }}>
                <Icons />
                <Graph width={screenSize.width} height={'100%'} />
            </IconContext.Provider>
        </div>
    )
}

function Icons() {
    return (
        <div className='flex justify-between items-center w-[100%] gap-4 p-2 px-4'>
            <div className='flex items-center justify-center gap-3'>
                <button>
                    <RiTimeLine />
                </button>
                <button>
                    <RiCalendarLine />
                </button>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <button>
                    <RiTempColdLine />
                </button>
                <button>
                    <RiDropLine />
                </button>
                <button>
                    <RiContrastDrop2Line />
                </button>
                <button>
                    <RiSunLine />
                </button>
                <button>
                    <RiSnowyLine />
                </button>
                <button>
                    <RiRainyLine />
                </button>
                <button>
                    <RiWindyLine />
                </button>

            </div>
        </div>
    )
}

function Graph({ width, height }) {
    const graphSize = useRef(null)
    const [h, setH] = useState(0)
    useEffect(() => {
        console.log(h)
        setH(graphSize.current ? graphSize.current?.clientHeight : 0)
    }, [graphSize, height, width])
    return (

        <svg width={width} height={height} className='' ref={graphSize}>
            <g style={{}}>
                <g style={{ stroke: '#fff' }} className='hidden'>
                    <line x1="0" x2="0" y1="0" y2={h}>

                    </line>
                </g>
                <g style={{ stroke: '#fff' }} className='hidden'>
                    <line x1="0" x2={width} y1={h} y2={h}></line>
                </g>

            </g>
            <defs>
                <linearGradient id="grad1" x1="50%" y1="0%" x2="50%" y2="90%">
                    <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: '1' }} />
                    <stop offset="100%" style={{ stopColor: '#fff', stopOpacity: '0' }} />
                </linearGradient>
            </defs>

            <polygon
                // fill="#grad1"
                style={{ fill: 'url(#grad1)' }}
                stroke={'#fff'}
                strokeWidth="0.8"
                strokeLinejoin='round'
                points={(!isNaN(parseFloat(width)) && !isNaN(parseFloat(h))) ?  `0,${h} 0,${h} 30,50 50,${h} 100,100 200,50 ${width},0 ${width}, ${h}` : ''}
            />


            {/* <g style={{ visibility: 'hidden', }}>
                <text x='10' y='12' style={{ fill: '#fff' }}>{parseInt(yLeg.max)}</text>
                <text x='10' style={{ fill: '#fff' }} y={h / 2}>{parseInt(((yLeg.max - yLeg.min) / 2) + yLeg.min)}</text>
                <text x='10' style={{ fill: '#fff' }} y={h - 10}>{parseInt(yLeg.min)}</text>
            </g> */}


        </svg>

    )
}


export default Forecast