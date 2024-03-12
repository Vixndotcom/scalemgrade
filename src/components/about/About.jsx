import React from 'react'
import AboutHead from './AboutHead'
import styles from '../../style'
import ImagesP from './ImagesP'
import Backgroundd from './Backgroundd'
import Approach from './Approach'
import Choice from './Choice'
import Glass from '../home/Glass'
import Cardd from './Cardd'
import Purpose from './Purpose'


const About = () => {
  return (
    <div className='w-full overflow-hidden'>
      
    <div className={`${styles.flexStart} bg-nav`}>
  <div className={`${styles.boxWidth} `}  >
    <AboutHead />
  </div>
      
    </div>

   
      
      <div className='bg-white'> 
      < ImagesP />
      < Cardd />
     </div>
      
 
 < div className={` ${styles.paddingX}  ${styles.flexStart}  `}>
      
<div className={`${styles.boxWidth}  `}> 



 < Backgroundd /> 


 
 
  
</div>
</div> 


< div className={`  ${styles.flexStart} bg-navy mt-10`}>
      
      <div className={`${styles.boxWidth}  `}> 
       <h1 className='text-white text-center text-[36px] mt-10 mb-5'>Our Approach </h1>
      
      
       < Approach /> 
      
      
      </div>
      
      </div> 








< div className={`  ${styles.flexCenter}  `}>
      
      <div className={`${styles.boxWidth}  `}> 
      <div >
        <h2 className=' text-yellow-400 text-center text-[36px] mt-5 mb-5 font-medium '>
       What Sets Us Apart
       </h2>

      </div>
      
      
       < Purpose /> 
      
      
       
       
        
      </div>
      </div>  



 < div className={`  ${styles.flexStart} bg-nav `}>
      
<div className={`${styles.boxWidth}  `}> 



 < Choice /> 


 
 
  
</div>
</div> 







    </div>
  )
}

export default About