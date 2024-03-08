
import React, { useEffect, useRef } from 'react'
import { arrow } from '../../assets'
import Dynamics from '../Dynamics'
import Statement from '../services/Statement'
import { Link } from 'react-router-dom'



const Hero = () => {
   return (
     <div className='content z-[99] md:mt-20 sm:mt-10 bg-paper' >
       
      <Dynamics>
       <h1 className='content-inner-bold shadow-text md:mt-10 ' >
         <div className='mb-10'>ACE THOSE </div>
         <div className='mb-5 '>GRADES</div>
      </h1>
      </Dynamics>
       <p className='shadow-text leading-[40px]'>Navigate your learning  <br /> experience seamlessly with success
         </p> 
         <Statement>
          <button className='font-bold' >
       <Link to ='/about'>Explore <span><img src={arrow} alt="" className='object contain w-[25%] mx-8 '/></span></Link>    
          </button> 
          </Statement>
    </div>
  )
}

export default Hero