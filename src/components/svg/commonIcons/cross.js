export const ICcross = ({s, styleCommon}) => {
    return (
        <svg viewBox=' 0 0 6.35 6.35' width={s} height={s} style={{ height: 'auto', width: 'auto', margin: 'auto' }}>
            <g id='cross'
                style={styleCommon}
                transform="matrix(1.2,0,0,1.2,-0.63500004,-0.63500004)">
                <path d="M 1.27,1.27 5.0799999,5.0799999" />
                <path d="M 5.0799999,1.27 1.27,5.0799999" />
            </g>
        </svg>
    )

}