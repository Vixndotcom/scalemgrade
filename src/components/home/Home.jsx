import React from 'react'
import Hero from './Hero'
import styles from '../../style'

import Images from './Images'

import Welcome from './Welcome'
import Expertise from './Expertise'
import Original from './Original'
import Support from './Support'
import Phone from './Phone'
import Progress from './Progress'
import ProgressBar from './ProgressBar'
import Glass from './Glass'
import ImageH from './ImageH'





function Home() {



  return (
    <div className='w-full overflow-hidden'>


    <div className={`${styles.flexStart} bg-hero`} >
    <div className={`${styles.boxWidth} `}  >
      <div className='container'>
       {/* < Hero timeline={tl}/> */}
       < Hero />
       <Images /> 
    
     
   </div>  
</div> 
</div>


    < div className={` ${styles.paddingX} ${styles.flexStart}  mt-5`}>
      
      <div className={`${styles.boxWidth}  `}> 
 


      < Welcome />
   
    
       
       
        
      </div>
      </div> 
   
    
    

     


   
    
       
< div className={` ${styles.paddingX} ${styles.flexStart} border-t-[1px] border-b-gray-200 `}>
      
<div className={`${styles.boxWidth}  `}> 



 < ProgressBar /> 


 
 
  
</div>
</div> 


< div className={`  ${styles.flexCenter}  `}>
      
      <div className={`${styles.boxWidth}  `}> 
      
      
      
       < Glass /> 
      
      
       
       
        
      </div>
      </div>  




       
< div className={` ${styles.paddingX} ${styles.flexStart} bg-phone `}>
      
<div className={`${styles.boxWidth}  `}> 



< Phone />


 
 
  
</div>
</div> 
       
    
   


















</div> 


  )
};

export default Home