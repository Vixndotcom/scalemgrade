import React from 'react'
import styles from '../../style'
import DynamicLeft from '../Dynamics'
import { lamp, success } from '../../assets'

const Cardd = () => {
  return (
    
    <section className={`${styles.flexCenter} mb-20 flex flex-col mt-10 `}>

      <DynamicLeft>
          <div className=' text-center about-card   p-2  about-morph rounded-t-[24px] rounded-b-[8px] rounded-b-[12px] h-[160px]
         border-[1px] border-yellow-500'>
          
           <h1 className='text-[32px] font-semibold p-4 shadow-text text-white mx-auto '>
             Your Academics in Safe Hands
            </h1> 
         
        </div> 
        </DynamicLeft>

        <div className='flex flex-col'>

          <div className='about-img '>
            <img src={lamp} alt="" className='w-[60%] mx-auto rounded-[8px]  '/>
          </div>
      
      
        </div>
        
    </section>
    
  )
}

export default Cardd