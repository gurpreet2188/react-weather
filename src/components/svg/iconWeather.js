import React, { useContext, useEffect, useState } from 'react'
import { GlobalColors} from '../../context/contexts'

function IconAll({ size, rain, clouds, id, sun, anim}) {
    const {textColor} = useContext(GlobalColors)
    const thunder = (id >= 200 && id <= 232) ? true : false
    const [cloudsPCT, setCloudsPCT] = useState()
    const [cloudsOpacity, setCloudsOpacity] = useState()
    const [sunMoonOpacity, setSunMoonOpacity] = useState()

    useEffect(() => {
        if (rain || thunder) {
            if ((id >= 300 && id <= 321) || (id >= 500 && id <= 504)) {
                setCloudsOpacity(0)
                setSunMoonOpacity(.5)
                setCloudsPCT(1)
            } else {
                setCloudsOpacity(clouds.pct / 100)
                setSunMoonOpacity(0)
                setCloudsPCT(1)
            }
            
        } else if (clouds.pct <= 10) {
            setCloudsPCT(0)
        } else {
            setCloudsPCT(clouds <=40 ? 0.6 : clouds / 100)
        }
    }, [clouds, sun, rain, id, thunder])

    const commonStyle = {
        transition: anim ? 'all 0.9s ease-in-out' : "",
    }
    const sunStyle = {
        opacity: (rain || thunder) ? sunMoonOpacity : 1,
        trasformOrigin: '0% 0%',
        transform: sun === "sunrise" ? "translateX(0%)" : 'translateX(100%)',
        stroke: textColor
    }

    const moonStyle = {
        opacity: (rain || thunder) ? sunMoonOpacity : 1,
        transform: sun === "sunset" ? "translateX(0%)" : 'translateX(100%)',
    }
    const cloudStyle = {
        top: { transformOrigin: '0% 30%', opacity: (rain || thunder) ? "1" : clouds / 100 },
        bottom: { transformOrigin: '80% 80%', opacity: (rain || thunder) ? cloudsOpacity : clouds / 100 },
        common: {
            transform: `scale(${cloudsPCT},${cloudsPCT})`,
            fill: (rain || thunder) ? "#777" : "#f1f1f1",
            stroke: textColor,
        }
    }
    // console.log(cloudsPCT)
    const rainStyle = {
        opacity: (rain || thunder) ? "1" : "0",
        fill: thunder ? "#aaa" : '#fff',
        stroke: textColor
    }


    const thunderStyle = {
        opacity: thunder ? ".7" : "0",
        fill: "#fff",
        stroke: textColor
    }

    return (
        <svg width={size} height={size} viewBox="0 0 128 128" style={{ transition: 'all .5s ease' }} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" style={{ ...moonStyle, ...commonStyle }} id="moon" clip-rule="evenodd" d="M107.007 96.6602C103.146 97.537 99.1269 98 95 98C65.1766 98 41 73.8234 41 44C41 31.7263 45.0948 20.409 51.9928 11.3397C27.9485 16.7991 10 38.3035 10 64C10 93.8234 34.1766 118 64 118C81.5497 118 97.1441 109.628 107.007 96.6602Z" fill="url(#paint0_radial_51_40)" />
            <circle id="sun" style={{...sunStyle, ...commonStyle}} cx="64" cy="64" r="54" fill="url(#sunGradient)" />
            <path fill-rule="evenodd"  style={{ ...cloudStyle.common, ...cloudStyle.bottom, ...commonStyle }} id="cloud2" clip-rule="evenodd" d="M45.516 45C25.9039 45 10 61.3411 10 81.5C10 101.659 25.9039 118 45.516 118C84.322 117.766 73.2246 117.87 92.558 117.875C106.613 117.875 118 106.166 118 91.7261C117.995 77.2912 106.608 65.5879 92.558 65.5879C87.7943 65.5934 83.1217 66.9782 79.0868 69.5795C74.1409 54.8677 60.659 45 45.516 45V45Z" />
            <path fill-rule="evenodd"  style={{ ...cloudStyle.common, ...cloudStyle.top, ...commonStyle }} id="cloud1" clip-rule="evenodd" d="M83.7995 10C102.685 10 118 25.6695 118 45C118 64.3305 102.685 80 83.7995 80C46.4307 79.7761 57.117 79.875 38.4997 79.8802C24.965 79.8802 14 68.6527 14 54.8058C14.0052 40.9641 24.9702 29.7418 38.4997 29.7418C43.087 29.7471 47.5865 31.075 51.472 33.5694C56.2347 19.4621 69.2173 10 83.7995 10V10Z" />
            <g id="rain" style={{ ...rainStyle, ...commonStyle }} >
                <rect x="62" y="80.1249" width="5.83348" height="17.5004" rx="2.91674" transform="rotate(-45 62 80.1249)"  />
                <rect x="41" y="80.1249" width="5.83348" height="17.5004" rx="2.91674" transform="rotate(-45 41 80.1249)" />
                <rect x="66" y="106.125" width="5.83348" height="17.5004" rx="2.91674" transform="rotate(-45 66 106.125)"  />
                <rect x="85" y="104.125" width="5.83348" height="17.5004" rx="2.91674" transform="rotate(-45 85 104.125)"  />
                <rect x="104" y="104.125" width="5.83348" height="17.5004" rx="2.91674" transform="rotate(-45 104 104.125)"  />
                <rect x="83" y="80.1249" width="5.83348" height="17.5004" rx="2.91674" transform="rotate(-45 83 80.1249)"  />
            </g>
            <path id="thunder" style={{ ...thunderStyle, ...commonStyle }} d="M78.478 34H57.0188C56.942 34 56.8938 34.0831 56.9321 34.1498L65.7987 49.6002C65.8369 49.6669 65.7888 49.75 65.7119 49.75H46.2276C46.1405 49.75 46.095 49.8535 46.1539 49.9176L89.0079 96.5898C89.0834 96.6719 89.2163 96.5876 89.1742 96.4843L74.9793 61.7003C74.9525 61.6345 75.0008 61.5625 75.0719 61.5625H92.8346C92.9098 61.5625 92.9581 61.4826 92.9232 61.416L78.5666 34.0535C78.5493 34.0206 78.5152 34 78.478 34Z" />
            <defs>
                <radialGradient id="paint0_radial_51_40" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(101.5 101) rotate(-121.298) scale(102.987)">
                    <stop stop-color="#f6f641" />
                    <stop offset="1" stop-color="#EDEDED" />
                </radialGradient>
                <radialGradient id="sunGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(64 64) rotate(90) scale(54)">
                    <stop stop-color="#FFFCAC" />
                    <stop offset="1" stop-color="#ffb100" stop-opacity="0.69" />
                </radialGradient>
                <linearGradient id="cloudsGradient" x1="50" y1="64" x2="50" y2="118" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#AEAEAE" />
                    <stop offset="1" stop-color="#B0B0B0" stop-opacity="0.72" />
                </linearGradient>
                <linearGradient id="paint3_linear_51_40" x1="66" y1="10" x2="66" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#AEAEAE" />
                    <stop offset="1" stop-color="#B0B0B0" stop-opacity="0.72" />
                </linearGradient>
            </defs>

            <filter id="rainShadow" x="38.2081" y="77.2082" width="85.0833" height="48.0833" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_40" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_40" result="shape" />
            </filter>


            <filter id="cloudTopShadow" x="6" y="45" width="116" height="81" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_40" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_40" result="shape" />
            </filter>
            <filter id="cloudBottomShadow" x="10" y="10" width="112" height="78" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_51_40" />
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_51_40" result="shape" />
            </filter>
        </svg>
    )
}

export default IconAll
