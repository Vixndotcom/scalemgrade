import React from 'react';
import ParallaxText from './ParallaxText';
import { card, lady, male } from '../../assets';



const Approach = () => {

  return (
    <div>
      <div className=''>

        <div className='card my-2'>
        <img src={lady} alt="" className='' />
        </div>
        <div className='cardd '>
        <img src={male} alt="" className=' ' /> 
        </div>
       
        
      </div>
    
        
        

      <ParallaxText />
    </div>
  )
}

export default Approach