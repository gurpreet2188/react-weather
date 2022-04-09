export function WeatherSun ({s, styleCommon}) {
  return (
    <svg
      width={s}
      height={s}
      style={{ height: '100%', width: '100%' }}
      viewBox='0 0 6.35 6.35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>

      <g id='sun' style={{...styleCommon }}>
        <ellipse cx='3.175' cy='3.175' rx='1.7721888' ry='1.7721887' />

        <g>
          <path d='m 5.4621904,3.1749999 h 0.254' />
          <path d='m 0.63380935,3.1749999 h 0.254' />
          <path d='m 3.1749999,5.4621904 v 0.254' />
          <path d='m 3.1749999,0.63380931 v 0.254' />
          <path d='M 1.378102,4.9718909 1.0188915,5.3311014' />
          <path d='M 5.3311085,1.0188844 4.9718881,1.3781048' />
          <path d='M 4.967816,4.9747893 5.3270264,5.3339998' />
          <path d='M 1.0148095,1.0217828 1.3740298,1.3810032' />
        </g>
      </g>
    </svg>
  )
}
