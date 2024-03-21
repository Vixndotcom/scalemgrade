import React, { useState } from 'react'
import styles from '../../style'
import DynamicLeft from '../Dynamics'
import {  baby, desk, lamp, success } from '../../assets'
import { animated, useSpring, config} from 'react-spring'

const Cardd = () => {
  return(
    <div>
      <img src={baby} alt="student" />
    </div>
  )
}






































































































































//   return (
    
//     <section className={`${styles.flexCenter} mb-20 flex flex-col mt-10 `}>

//       <DynamicLeft>
//           <div className=' text-center about-card   p-2  about-morph rounded-t-[8px] rounded-b-[4px]  h-[100px]
//          border-[1px]  mx-auto'>
          
//            <h1 className='text-[28px] font-semibold p-4 shadow-text text-white mx-auto '>
//              Your Academics in Safe Hands
//             </h1> 
         
//         </div> 
//         </DynamicLeft>
        
//          <div className='flex flex-col'>
        
//           <div className='about-img '>
//             <img src={babe} alt="" className='w-[80%] mx-auto rounded-[8px]  '/>
//           </div>
      
      
//         </div> 
        
//     </section>
    
//   )
// }

export default Cardd