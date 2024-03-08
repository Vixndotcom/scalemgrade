import React from 'react'
import Google from './Google'
import ImageC from './ImageC'
import Us from './Us'
import styles from '../../style'
import Email from './Email'

const Contact = () => {
  return (
    <div className='w-full overflow-hidden bg-nav'>

    <div className={`${styles.flexStart} `}>
    <div className={`${styles.boxWidth} `}  >
      <Us />
    </div>
     </div>
  
     < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        
        <div className={`${styles.boxWidth}  `}> 
   
  
  
        < ImageC />
    
          
        </div>
        </div>
  
     < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        
        <div className={`${styles.boxWidth}  `}> 
   
  
  
        < Email />
    
          
        </div>
        </div>
  
     < div className={` ${styles.paddingX} ${styles.flexStart}  `}>
        
        <div className={`${styles.boxWidth}  `}> 
   
  
  
        < Google />
    
          
        </div>
        </div>

        </div>
  )
}

export default Contact