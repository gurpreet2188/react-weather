export const ICclock = ({s, styleCommon}) => {
    return (
        <svg viewBox=' 0 0 6.35 6.35' width={s} height={s} style={{ height: 'auto', width: 'auto', margin: 'auto' }}>
            <g id='clock'
                style={styleCommon}>
                <circle
                    cx="3.175"
                    cy="3.175"
                    r="2.5016823" />
                <path d="m 3.181908,1.016 v 2.1548072 l 1.5239998,-10e-8" />
            </g>
        </svg>
    )

}