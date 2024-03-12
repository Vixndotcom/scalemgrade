import React from 'react'
import { best,  task, time } from '../../assets'
import styles from '../../style'

import Statementt from '../Statementt'


const ImageH = () => {

  return (
    <section className={`${styles.flexCenter} align-items-center justify-center items-center text-center flex z-[99]`}>
        <div className=' flex-col mx-auto'>
            
        
         {/* card */}
<Statementt>
         <div className=' justify-content-center w-[240px] h-[200px] glass-morph rounded-[16px] '>
          <div className='mx-auto p-4'>
           <img src={best} alt="" className='w-[40%] mx-auto' /> 
          <h1 className='color font-semibold  text-[28px] sm:text-[20px]'>Success Guaranteed</h1>
        </div>
        </div>
 </Statementt>

         {/* card */}
           
           {/* card 2 */}
           <Statementt>        
           <div className=' justify-content-center w-[240px] h-[200px] glass-morph mt-4 rounded-[16px]'>
          <div className='mx-auto p-4'>
           <img src={time} alt="" className='w-[40%] mx-auto' /> 
          <h1 className='color font-semibold  text-[28px] sm:text-[20px]'>Prompt Responses </h1>
        </div>
        </div>
        </Statementt>


           {/* card 2 */}
           <Statementt>
           <div className=' justify-content-center w-[240px] h-[200px]  glass-morph mt-4 rounded-[16px] '>
          <div className='mx-auto p-4'>
           <img src={task} alt="" className='w-[40%] mx-auto' /> 
          <h1 className='color font-semibold  text-[28px] sm:text-[20px]'>Equal to the task</h1>
        </div>
        </div>
        </Statementt>


        </div>
    </section>
  )
}

export default ImageH