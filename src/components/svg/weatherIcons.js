import React from 'react';
import { WeatherSun } from './weathericons/sun';
import {WeatherMoon} from './weathericons/moon'
import { WeatherSunClouded } from './weathericons/sunClouded';
import {WeatherMoonClouded} from './weathericons/moonClouded'
import {WeatherRain} from './weathericons/rain'
import {WeatherSnow} from './weathericons/snow'
import {WeatherRainThunder} from './weathericons/rainThunder'
import {WeatherSnowThunder} from './weathericons/snowThunder'
import {WeatherRainSnow} from './weathericons/rainSnow'
import {WeatherClouded} from './weathericons/clouded'

export function WeatherIcons({s, icon, iconColor}) {
    const styleCommon = {
        stroke: iconColor,
        strokeLinecap: 'round',
        strokeWidth: 0.2
    }
    if(icon === 'sun') {
        return (<WeatherSun s={s} styleCommon={styleCommon}/>)
    }else if(icon ==='moon'){
        return (<WeatherMoon s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'rain'){
        return (<WeatherRain s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'rainThunder'){
        return (<WeatherRainThunder s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'clouded'){
        return (<WeatherClouded s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'sunClouded') {
        return (<WeatherSunClouded s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'moonClouded') {
        return (<WeatherMoonClouded s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'snow') {
        return (<WeatherSnow s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'snowThunder') {
        return (<WeatherSnowThunder s={s} styleCommon={styleCommon}/>)
    }else if(icon === 'rainSnow') {
        return (<WeatherRainSnow s={s} styleCommon={styleCommon}/>)
    }
}