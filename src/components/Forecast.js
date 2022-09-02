import React, { useEffect, useRef, useState } from 'react'
import { IconContext } from 'react-icons'
import { RiTimeLine, RiTempColdLine, RiCalendarLine, RiDropLine, RiContrastDrop2Line, RiSunLine, RiSnowyLine, RiRainyLine, RiWindyLine } from 'react-icons/ri'
import useWindowSIze from '../customHooks/useWindowSIze'
import setGraphVals from '../data/setGraphVals'
import { keys } from '../helpers/keys'

function Forecast({ oneCall }) {
    const screenSize = useWindowSIze()
    const [graphType, setGraphType] = useState(keys.TEMP)
    return (
        <div className='flex flex-col justify-center items-start h-[100%] gap-4'>
            <IconContext.Provider value={{ className: 'h-[1.1rem] w-[1.1rem]' }}>
                <Icons setGraphType={setGraphType} graphType={graphType} />
                <div className='w-screen, h-[100%]'>
                    <Graph width={screenSize.width} height={'100%'} graphType={graphType} />
                </div>
            </IconContext.Provider>
        </div>
    )
}

function Icons({ graphType, setGraphType }) {

    const btnStyle = (btnType) => {
        return {
            color: graphType === btnType ? '' : '#fff',
            opacity: graphType === btnType ? 1 : 0.5,
            transition: 'all 1s'
        }
    }

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
                <button style={{ ...btnStyle(keys.TEMP) }} onClick={() => { setGraphType(keys.TEMP) }}>
                    <RiTempColdLine />
                </button>
                <button style={{ ...btnStyle(keys.HUMIDITY) }} onClick={() => { setGraphType(keys.HUMIDITY) }}>
                    <RiDropLine />
                </button>
                <button style={{ ...btnStyle(keys.POP) }} onClick={() => { setGraphType(keys.POP) }}>
                    <RiContrastDrop2Line />
                </button>
                <button style={{ ...btnStyle(keys.UV) }} onClick={() => { setGraphType(keys.UV) }}>
                    <RiSunLine />
                </button>
                <button style={{ ...btnStyle(keys.SNOW) }} onClick={() => { setGraphType(keys.SNOW) }}>
                    <RiSnowyLine />
                </button>
                <button style={{ ...btnStyle(keys.RAIN) }} onClick={() => { setGraphType(keys.RAIN) }}>
                    <RiRainyLine />
                </button>
                <button style={{ ...btnStyle(keys.WIND_SPEED) }} onClick={() => { setGraphType(keys.WIND_SPEED) }}>
                    <RiWindyLine />
                </button>

            </div>
        </div>
    )
}

function Graph({ width, height, graphType }) {
    const [touchX, setTouchX] = useState()
    const [graphInfo, setGraphInfo] = useState(false)
    const graphSize = useRef(null)
    const [h, setH] = useState(0)
    const [xyAxis, setXYAxis] = useState('')
    const [graphText, setGraphText] = useState('')
    useEffect(() => {
        setH(graphSize.current ? graphSize.current?.clientHeight : 0)

    }, [graphSize, height, width])

    useEffect(() => {
        let check = true
        if (check) {
            // console.log(setGraphVals(width, h, keys.RAIN))
            const graphData = setGraphVals(width, h, graphType)
            setXYAxis(graphData[0])
            setGraphText(graphData[1])
        }
        return () => check = false
    }, [h, width, graphType])

    // setGraphVals(width, h)

    const polygon =  () => {
        if(graphText?.xAxisArr) {
            return (
                <polygon
                    fill="#6ee7b733"
                    // style={{ fill: 'url(#grad1)' }}
                    // stroke={'#6ee7b7'}
                    strokeWidth="0.8"
                    stroke={'#6ee7b7'}
                    points={`${graphText?.xAxisArr[0]},${h} ${xyAxis} ${graphText?.xAxisArr[graphText?.xAxisArr?.length - 1]},${h}`}
                />
            )
        }
    }

    console.log(graphText?.xAxisArr ? graphText?.xAxisArr[0] : '')
    return (

        <svg width={width} height={height} ref={graphSize} onClick={() => {
            setGraphInfo(!graphInfo)
            setTimeout(() => { setGraphInfo(false) }, 225000)
        }}>
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
                    <stop offset="0%" style={{ stopColor: '#6ee7b7', stopOpacity: '0.5' }} />
                    <stop offset="100%" style={{ stopColor: '#6ee7b7', stopOpacity: '1' }} />
                </linearGradient>
            </defs>
            {/* <circle cx='97.5' cy='124.66666666666663' r='3' fill='#fff'></circle> */}
            {/* <circle cx='146.25' cy='281.667456930614833' r='3' fill='#fff'></circle> */}
            {/* <path d={`M0 318.4349612770665, Q24 315 48.75,318.4349612770665, T97.5,124.66666666666663 T146.25,281.66745693061483`} stroke='#fff' fill='none'></path> */}
            {polygon()}
            {/* <polygon
                fill="#6ee7b733"
                // style={{ fill: 'url(#grad1)' }}
                // stroke={'#6ee7b7'}
                strokeWidth="0.8"
                stroke={'#6ee7b7'}
                points={(!isNaN(parseFloat(width)) && !isNaN(parseFloat(h))) ? `${graphText?.xAxisArr[0]},${h - 40} ${xyAxis} ${graphText?.xAxisArr[graphText?.xAxisArr?.length - 1]},${h - 40}` : ''}
            /> */}

            {/* <polyline
                fill="#6ee7b700"
                // style={{ strokeDasharray: '6 1 1', opacity: 0.8 }}
                // style={{ fill: 'url(#grad1)' }}
                stroke={'#6ee7b7'}
                strokeWidth="1"

                points={(!isNaN(parseFloat(width)) && !isNaN(parseFloat(h))) ? `${xyAxis} ` : ''}
            /> */}

            {/* <polyline
                fill="#6ee7b700"
                style={{ strokeDasharray: '6 1 1', opacity: 0.3 }}
                stroke={'#6ee7b7'}
                strokeWidth="0.8"

                points={(!isNaN(parseFloat(width)) && !isNaN(parseFloat(h))) ? `0,${h - 30} ${width},${h - 30}` : ''}
            /> */}

            {/* <polyline
                fill="#6ee7b700"
                style={{ strokeDasharray: '6 1 1', opacity: 0.3 }}
                stroke={'#6ee7b7'}
                strokeWidth="0.8"

                points={(!isNaN(parseFloat(width)) && !isNaN(parseFloat(h))) ? `0,${graphText?.yMax / 2} ${width},${graphText?.yMax / 2}` : ''}
            /> */}

            {/* <polyline
                fill="#6ee7b700"
                style={{ strokeDasharray: '6 1 1', opacity: 0.3 }}
                stroke={'#6ee7b7'}
                strokeWidth="0.8"

                points={(!isNaN(parseFloat(width)) && !isNaN(parseFloat(h))) ? `0,${graphText?.yMin} ${width},${graphText?.yMin}` : ''}
            /> */}

            <g style={{ opacity: graphInfo ? 0.7 : 0, transition: 'all 1s' }}>
                {/* <text x={graphText.xAxisArr} y={graphText.yAxisArr} fontSize='14px' style={{ fill: '#fff',  }}>{}</text> */}
                {graphText ? graphText?.valArr.map((v, i) => {
                    return (
                        <g key={i}>
                            <polyline
                                fill="#6ee7b700"
                                style={{ strokeDasharray: '6 1 1', opacity: 0.2 }}
                                // style={{ fill: 'url(#grad1)' }}
                                stroke={'#6ee7b7'}
                                strokeWidth="1"

                                points={`${graphText.xAxisArr[i]},${15} ${graphText.xAxisArr[i]},${graphText.yAxisArr[i]}`}
                            />
                            <text x={graphText.xAxisArr[i]} y={15} fontSize='14px' textAnchor={i === (graphText?.valArr.length - 1) ? 'end':  i === 0 ? 'start' :'middle'} style={{ fill: '#fff', opacity: 0.5 }}>{v}</text>

                        </g>
                    )
                }) : ''}
                {/* <text x='10' y={graphText?.yMin} style={{ fill: '#fff' }}>{graphText?.valMax}</text> */}
                {/* <text x='10' style={{ fill: '#fff' }} y={h / 2}>{ 20}</text> */}
                {/* <text x='10' style={{ fill: '#fff' }} y={h - 30}>{20 }</text> */}
            </g>


            <style>
                {
                    `
                `
                }
            </style>
        </svg>


    )
}


export default Forecast