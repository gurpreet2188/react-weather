import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';

export function IconLoadingBar({ s }) {
    const [load, setLoad] = useState(false)

    useEffect(() => {
        setTimeout(() => { setLoad(true) }, 500)
    }, [])

    return (
        <svg className='loading-bar-svg' width={s} height={s} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* <rect x="2" y="9" width="24" height="5" fill="#C4C4C4" /> */}
            <rect className={load ? "loading-bar-svg-load" : "loading-bar-svg-unload"} x="2" y="9" width="24" height="5" fill="#000" />

        </svg>

    )
}