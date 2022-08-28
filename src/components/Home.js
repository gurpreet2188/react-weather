import React, { } from 'react'
import { IconContext } from 'react-icons'
import { WiDaySunny } from 'react-icons/wi'
import { CgSearch, CgPin, CgChevronLeft, CgChevronRight } from 'react-icons/cg'
// import useWindowSIze from '../customHooks/useWindowSIze'
function Home() {
  // const screenSize = useWindowSIze()

  // const [locState, setLocState] = useState(false)
  // const [search, setSearch] = useState(false)


  return (
    <div className='relative flex flex-col justify-center items-center gap-6 p-4 bg-slate-800 w-screen h-screen overflow-hidden' >
      <div className='opacity-70'>
        <IconContext.Provider value={{ className: 'h-[8rem] w-[8rem] animate-spin-slow', color: '#fff' }}>
          <WiDaySunny />
        </IconContext.Provider>
      </div>


      <div className='flex  justify-center items-start p-8 h-[50%] w-[95%] rounded-lg gap-4 border border-white/0'>
        <IconContext.Provider value={{ color: '#fff', className: 'fill-white stroke-white h-[1.2rem] w-[1.2rem]' }}>


          <div className='flex flex-col justify-start items-start gap-12 w-[100%]'>
            <div className='flex justify-start items-center text-white gap-4 w-[100%]'>
              <CgPin />
              <button className='p-2 px-4 border border-white/10 rounded-full overflow-hidden'>
                Precise
              </button>
              <button className='p-2 px-4 border border-white/10 rounded-full overflow-hidden'>
                Approx.
              </button>
            </div>

            <div className='flex justify-start items-center text-white gap-4 w-[100%]'>
              <CgSearch />
              <div>
                <input type='text' className='bg-transparent p-1 border-b border-b-white/30 max-w-[90%]' />
                <input type='submit'/> 
              </div>

            </div>
          </div>

        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Home