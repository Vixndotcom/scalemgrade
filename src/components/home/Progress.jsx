import React, { useEffect, useState } from 'react'
import SvgCode from './SvgCode'

const Progress = () => {
const[count, setCount] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    if (count < 99) {
      setCount(preCount => preCount + 1);
    } else {
      clearInterval(interval);
    }
  }, 30);
  return() => clearInterval(interval);
}, [count])

  
  return (
    <section className='svgg mt-2 mb-2 '>

    <div className='skill '>
        <div className='outer '>
            <div className='inner'
            >
                <div id='number'>
                     <p>{count}%</p> 
                </div>
            </div>
        </div>
        </div>
           


        {/* svg */}

    
             <SvgCode />

        {/* svg */}

        {/* heading */}
       
        {/* heading */}

        
    </section>
  )
}

export default Progress