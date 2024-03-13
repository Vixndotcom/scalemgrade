import React from 'react'
import styles from '../../style'


import Statementt from '../Statementt'



const SetUs = () => {

  return (
    <section className={`${styles.flexCenter} align-items-center justify-center items-center text-center flex z-[99]`}>
        <div className=' flex-col mx-auto'>
            
        
         {/* card */}
<Statementt>
         <div className=' justify-content-center w-[280px] h-[240px] glass-morph rounded-[16px] '>
          <div className='mx-auto p-4'>
           {/* <img src={best} alt="" className='w-[40%] mx-auto' />  */}
          <h1 className='text-yellow-500  text-[28px] sm:text-[20px] mt-4'>Personalised Approach</h1>
          <p className='mt-4 text-[20px] text-white shadow-text'>Designed to meet the unique needs of every student</p>
        </div>
        </div>
 </Statementt>

         {/* card */}
           
           {/* card 2 */}
           <Statementt>        
           <div className=' justify-content-center w-[280px] h-[240px] glass-morph mt-4 rounded-[16px]'>
          <div className='mx-auto p-4'>
           {/* <img src={time} alt="" className='w-[40%] mx-auto' />  */}
           <h1 className='text-yellow-500  text-[28px] sm:text-[22px] mt-4  '>Professional Guidance</h1>
          <p className='mt-4 text-[20px] text-white shadow-text'>Access to experienced educators</p>
        </div>
        </div>
        </Statementt>


           {/* card 2 */}
           <Statementt>
           <div className=' justify-content-center w-[280px] h-[240px]  glass-morph mt-4 rounded-[16px] '>
          <div className='mx-auto p-4'>
           {/* <img src={task} alt="" className='w-[40%] mx-auto' />  */}
           <h1 className='text-yellow-500  text-[28px] sm:text-[22px] mt-4'>Comprehensive Resources</h1>
          <p className='mt-4 text-[20px] text-white shadow-text'>A solution for assignments and other academic assessments </p>
        </div>
        </div>
        </Statementt>


        </div>
    </section>
  )
}

export default SetUs