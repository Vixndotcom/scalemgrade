import React from 'react'
import { easy, score, timer } from '../../assets'

const Loop = () => {
  return (
    <div className='text-[28px] flex font-semibold text-black scroll-text mt-10 mb-10'>
        <p className='flex flex-row'>
            <h1>Let's make things Easier</h1> 
            <img src={easy} className='w-[72px] h-[72px]' />
        </p>
   
        <p className='flex flex-row'>
            <h1>Optimise your Time</h1> 
            <img src={timer} className='w-[72px] h-[70px]' />
        </p>
   
        <p className='flex flex-row'>
            <h1>Score Higher</h1> 
            <img src={score} className='w-[72px] h-[72px]' />
        </p>
   
        
    
      
        <p className='textt'>
            Let's make things 
        </p>

        <p>
            Score Higher
        </p>
        
        <p>
            Score Higher
        </p>
      
        
    </div>
  )
}

export default Loop