import React, { useEffect, useRef } from 'react'
import { easy, score, timer } from '../../assets';

const Loop = () => {
const containerRef = useRef(null);


useEffect (() => {
   const container = containerRef.current;
 const scrollWidth = container.scrollWidth;
 const clientWidth = container.clientWidth;
 const duration = (scrollWidth / 100);


   
    const keyframes = `scrollText ${duration}s linear infinite`;
    container.style.animation = keyframes;

    return () => {
        container.style.animation = 'none';
    };
   
}, []);


  return (
    <div className='scroll-text-container gap-24' ref={containerRef}>
     <div className='scroll-text'>
 <p className='text-[36px] font-semibold '>Lets make things Easier</p>
 <img src={easy} className='scroll-img'/>
     </div>

     <div className='scroll-text'>
 <p className='text-[36px] font-medium' >Optimise your Time</p>
 <img src={timer} className='scroll-img'/>
     </div>

     <div className='scroll-text'>
 <p className='text-[36px] font-medium' >Score Higher</p>
 <img src={score} className='scroll-img'/>
     </div>
     <div className='scroll-text'>
 <p className='text-[36px] font-medium '>Lets make things Easier</p>
 <img src={easy} className='scroll-img'/>
     </div>
 
     <div className='scroll-text'>
 <p className='text-[36px] font-medium' >Optimise your Time</p>
 <img src={timer} className='scroll-img'/>
     </div> 

     <div className='scroll-text'>
 <p className='text-[36px] font-medium' >Score Higher</p>
 <img src={score} className='scroll-img'/>
     </div>
      </div>

  );
};

export default Loop