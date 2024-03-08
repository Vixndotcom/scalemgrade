import React from 'react'
import styles from '../../style'
import Text from '../Text'



const AboutHead = () => {
  return ( 
     <section id='about'  className={`flex md:flex-row flex-col md:mt-24  mt-36  ${styles.paddingY} mb-5 `}>
       <div className={`flex-1 ${styles.flexCenter} flex-col text-center `}>


    
  
        <Text> 
      < div className="flex flex-row justify-between items-center w-full">
         <h1 className="flex-1 plab font-normal ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[84px]">
       About-Us
        </h1>
       
       </div>
       </Text> 


       </div>



     </section>

   
  )
}

export default AboutHead