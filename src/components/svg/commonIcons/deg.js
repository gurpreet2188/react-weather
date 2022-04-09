export const ICdeg = ({s, styleCommon, v}) => {
    return (
        <svg viewBox=' 0 0 6.35 6.35' width={s} height={s} style={{ height: 'auto', width: 'auto', margin: 'auto' }}>
            <g id='cross'
                style={styleCommon}>
                <path style={{transformOrigin: 'center', transform:`rotate(${v}deg)`}} d="M 5.587995,5.5879901 3.1594698,3.7522179 0.76199508,5.5879901 3.1749949,0.76199028 5.587995,5.5879901" />
            </g>
        </svg>
    )

}