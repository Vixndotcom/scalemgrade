import React from 'react'
import AboutHead from './AboutHead'
import styles from '../../style'
import ImagesP from './ImagesP'
import Backgroundd from './Backgroundd'
import Approach from './Approach'
import Choice from './Choice'
import Glass from '../home/Glass'


const About = () => {
  return (
    <div className='w-full overflow-hidden'>
      
    <div className={`${styles.flexStart} bg-nav`}>
  <div className={`${styles.boxWidth} `}  >
    <AboutHead />
  </div>
      
    </div>

   
      
      <div className='bg-nav'> 
      < ImagesP />
     </div>
      
 
 < div className={` ${styles.paddingX}  ${styles.flexStart}  `}>
      
<div className={`${styles.boxWidth}  `}> 



 < Backgroundd /> 


 
 
  
</div>
</div> 



 < div className={`  ${styles.flexStart} bg-navy `}>
      
<div className={`${styles.boxWidth}  `}> 
 <h1 className='text-white text-center text-[32px] mt-10 mb-5'>Our Approach </h1>


 < Approach /> 


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