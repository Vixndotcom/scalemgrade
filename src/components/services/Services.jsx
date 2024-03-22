import React from 'react'
import Navigatee from './Navigatee'
import styles from '../../style'
import Assignments from './Assignments'
import Essay from './Essay'
import Powerpoint from './Powerpoint'
import Data from './Data'
import Dynamics from '../Dynamics'
import DynamicLeft from '../DynamicLeft'

import Stat from './Stat'
import ImageS from './ImageS'
import Loop from './Loop'
import Pbar from './Pbar'
import ProgressBarr from './ProgressBarr'


const Services = () => {








  return (
    <div className='w-full overflow-hidden'> 
               <div className={`${styles.flexStart} `} >
    <div className={`${styles.boxWidth} `}  >
      <Navigatee/>
       
    </div>
    </div> 


    
      
      <div > 
 


      < ImageS />
  
        
   
      </div>




  <Dynamics>
    < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
      
      <div className={`${styles.boxWidth}  `}> 
 


      < Assignments />
  
        
      </div>
      </div>

      </Dynamics>




      <DynamicLeft>
    < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
      
      <div className={`${styles.boxWidth}  `}> 
 


      < Essay />
   
    
       
       
        
      </div>
      </div> 
      </DynamicLeft>

        <div className='mt-4 mb-4'>
          <Loop />
        </div>

      <Dynamics>
    < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
      
      <div className={`${styles.boxWidth}  `}> 
 


    < Powerpoint />
      
      </div>
      </div> 
   </Dynamics>


     <DynamicLeft>

    < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        <div className={`${styles.boxWidth}  `}> 
 
      < Data />
    
      </div>
      </div> 

      </DynamicLeft>

      < div className={` ${styles.paddingX} ${styles.flexStart} h-[480px] bg-yellow-400 mb-10`}>
        <div className={`${styles.boxWidth}  `}> 
 
      < ProgressBarr/>
    
      </div>
      </div> 



 < div className={` ${styles.paddingX} ${styles.flexStart} bg-nav `}>
<div className={`${styles.boxWidth}  `}> 
<h1 className='text-white text-center text-[36px] mt-10 mb-5  '> Personal Statement </h1>

< Stat/>

</div>
</div>   



    </div>
  )
}


export default Services