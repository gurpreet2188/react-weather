import React from 'react';
import { ICaq } from './commonIcons/aq';
import { ICcross } from './commonIcons/cross';
import { ICsettings } from './commonIcons/settings';
import { IChumidity } from './commonIcons/humidity'
import { ICtemp } from './commonIcons/temp'
import { ICwind } from './commonIcons/wind'
import { ICdays } from './commonIcons/days'
import { ICclock } from './commonIcons/clock'
import { ICsearch } from './commonIcons/search'
import { IClocation } from './commonIcons/location'
import { ICarrow } from './commonIcons/arrow'
import { ICdeg } from './commonIcons/deg'

export function CommonIcons({ s, icon, deg }) {
    const styleCommon = {
        // stroke: iconColor,
        strokeLineCap: 'round',
        strokeLinejoin: 'round',
        strokeWidth: 0.2,
        fill: 'none'
    }

    if (icon === 'aq') {
        return (<ICaq s={s} styleCommon={styleCommon} />)
    } else if (icon === 'settings') {
        return (<ICsettings s={s} styleCommon={styleCommon} />)
    } else if (icon === 'cross') {
        return (<ICcross s={s} styleCommon={styleCommon} />)
    } else if (icon === 'humidity') {
        return (<IChumidity s={s} styleCommon={styleCommon} />)
    } else if (icon === 'temp') {
        return (<ICtemp s={s} styleCommon={styleCommon} />)
    } else if (icon === 'wind') {
        return (<ICwind s={s} styleCommon={styleCommon} />)
    } else if (icon === 'days') {
        return (<ICdays s={s} styleCommon={styleCommon} />)
    } else if (icon === 'clock') {
        return (<ICclock s={s} styleCommon={styleCommon} />)
    } else if (icon === 'search') {
        return (<ICsearch s={s} styleCommon={styleCommon} />)
    } else if (icon === 'location') {
        return (<IClocation s={s} styleCommon={styleCommon} />)
    } else if (icon === 'arrow') {
        return (<ICarrow s={s} styleCommon={styleCommon} />)
    }else if (icon === 'deg') {
        return (<ICdeg s={s} styleCommon={styleCommon} v={deg} />)
    } else {
        return (<></>)
    }

}