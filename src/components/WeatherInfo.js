import React, { useEffect, useState } from 'react'
import { IconContext } from 'react-icons'
import { RiSunFill, RiArrowDropDownLine, RiArrowDropUpLine, RiThunderstormsFill, RiDrizzleFill, RiRainyFill, RiSnowyFill, RiHazeFill, RiSunCloudyFill } from 'react-icons/ri'

function WeatherInfo({ currentData }) {
    const [condtionIcon, setCondition] = useState(()=> <RiSunFill/>)

    const checkCondtion = (start, end, conditionNum) => {
        if ( conditionNum >= start && conditionNum <= end) {
            console.log('condition icon')
            return true
        }
        
        return false
    }
    console.log(currentData?.weather['0']?.id)

    useEffect(() => {
        let check = true

        if (check) {
            if (checkCondtion(200, 232, parseInt(currentData?.weather['0']?.id))) {
                setCondition(()=> <RiThunderstormsFill/>)
            }else if(checkCondtion(300, 321, parseInt(currentData?.weather['0']?.id))) {
                setCondition(()=> <RiDrizzleFill/>)
            }else if(checkCondtion(500, 531, parseInt(currentData?.weather['0']?.id))) {
                setCondition(()=> <RiRainyFill/>)
            }else if(checkCondtion(600, 622, parseInt(currentData?.weather['0']?.id))) {
                setCondition(()=> <RiSnowyFill/>)
            }else if(checkCondtion(700,781, parseInt(currentData?.weather['0']?.id))) {
                setCondition(()=> <RiHazeFill/>)
            }else if(parseInt(currentData?.weather['0']?.id) === 800) {
                setCondition(()=> <RiSunFill/>)
            }else if(checkCondtion(801, 804, parseInt(currentData?.weather['0']?.id))) {
                setCondition(()=> <RiSunCloudyFill/>)
            }
        }

        return () => check = false
    }, [currentData?.weather['0']?.id])


    return (
        <div className='flex self-start justify-self-start justify-between items-center w-[100%] p-4'>
            <div className='flex flex-col self-center justify-self-end'>
                <IconContext.Provider value={{ className: 'h-[12rem] w-[12rem]' }}>
                    {condtionIcon}
                </IconContext.Provider>
                {/* <p className='text-lg font-light tracking-wider'>{currentData?.weather['0']?.description}</p> */}
            </div>
            <div className='flex flex-col self-center justify-self-end'>
                <h1 className='text-6xl tracking-wider font-thin'>{parseInt(currentData?.main?.temp)}<span className='text-3xl font-thin'>&#8451;</span></h1>
                <div className='flex items-center justify-between'>
                    <IconContext.Provider value={{ className: 'h-[1.3rem] w-[1.3rem]' }}>
                        <div className='flex justify-center items-center gap-1'>
                            <RiArrowDropDownLine />
                            <p>{parseInt(currentData?.main?.temp_min)}</p>
                        </div>
                        <div className='flex justify-center items-center gap-1'>
                            <RiArrowDropUpLine />
                            <p>{parseInt(currentData?.main?.temp_max)}</p>
                        </div>
                    </IconContext.Provider>
                </div>
            </div>
        </div>
    )
}

export default WeatherInfo