import React from 'react'
import { icon } from '../assets'
import styles from '../style'
import { Link } from 'react-router-dom'

const Footer = () => {

  const emailAddress = 'scalemygrade@gmail.com';



  return (
    <section className='mt-20 bottom-0 '>
   <div className={`${styles.flexStart} flex md:flex-row flex-col  `}>
   
   <div className='mb-5'>
      
          {/* first card */}
          <div className='sm:px-8 px-2'>
              <div className='black '>
                     <div className='mt-5 flex flex-row'>
                      <img src={icon} className='w-[56px] h-[60px]' />
                  <h1 className='text-[28px] font-bold mx-2 mt-2 text-white '>Scale My Grade </h1>  
                 
                  </div>
                  <p className='text-[20px] mt-5 mb-10 leading-[36px] text-white'>Unburdening your academic load one assessment at a time</p>
              </div>
              <div className='mb-10 md:mb-10'>
              <h1 className='text-[28px] w-[320px] text-white font-bold mt-5  pt-2 pb-2 border-b-[1px]'>Contact</h1> 
                   <p className='text-[20px] font-normal  text-white mt-10 '>Lets work together</p>
                   <p className=' text-black  font-semibold mt-5 color text-[20px] hover:text-yellow-500    
             cursor-pointer'  >
        
            <a href={`mailto:${emailAddress}`}>{emailAddress}</a>

             </p>
              </div>
          </div>
          {/* first card */}
            
            
        </div>
   <div className='  mb-5 md:mx-5'>
      
          {/* second card */}
          <div className='sm:px-8 px-2'>
              <div className='mb-5 '>
                  <h1 className='text-[28px] w-[320px] text-white font-bold mt-5 pt-2 pb-2  border-b-[1px]'>Useful Links</h1>  
                  <ul className='mt-5 flex flex-col mb-5 cursor-pointer font-semibold'>
                  <Link  className='text-[20px] mt-5 hover:text-yellow-500 color' to='/'>Home </Link>
                  <Link  className='text-[20px] mt-5 hover:text-yellow-500 color' to='/about'>About </Link>
                  <Link  className='text-[20px] mt-5 hover:text-yellow-500 color' to='/services'>Services </Link>
                  <Link  className='text-[20px] mt-5 hover:text-yellow-500 color' to='/contact'>Contact </Link>
              </ul>
              </div>
          </div>
          {/* first card */}
            
            
        </div>
        </div>

        <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] 
        border-t-[#3F3E45] md:mt-5 mb-5 ">

<p className="md:mx-24  text-center text-[14px] text-white">
2024 vixn.com. All Rights Reserved.
</p>
</div>
   </section>
  )
}

export default Footer