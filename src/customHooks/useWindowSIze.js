import React, { useEffect, useState } from 'react'

function useWindowSIze() {
  const [windowSize, setWindowSize] = useState({
    'width' : window.innerWidth, 'height' : window.innerHeight
  })

  useEffect(()=>{
    
    const handleSize = ()=> {
        setWindowSize({'width' : window.innerWidth, 'height' : window.innerHeight})
    }
     window.addEventListener('resize', handleSize)

     return () =>{
        window.removeEventListener('resize', handleSize)
     }
  },[window.innerWidth, window.innerHeight])

  return windowSize
}

export default useWindowSIze