import React from 'react'
import { essay, quality } from '../../assets'
import styles, { layout } from '../../style'
import DynamicLeft from '../DynamicLeft'


const Essay = () => {
  return (
    <DynamicLeft>
    <section className={`${layout.sectionReverse} mt-5`}> 

       <div className={`${layout.sectionImgReverse}`}>
        <img src={essay} alt="" className='w-[100%] h-[90%] mx-auto'   />
       </div>


      <div className={layout.sectionInfo}>
        
      <div className={`flex flex-row p-2 rounded-[20px] `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  border-[2px] border-blue-600`}>  
     <h1> 02. </h1>
     </div> 
        {/* content */}
        <div className="flex-1 flex flex-col ml-3">

        <div className="font-poppins font-normal color  text-[28px] leading-[23.4px] mt-1">
        <h4>Essay</h4>
        <h4 className='mt-4'>Excellence</h4>
      </div>
    
      <p className={`${styles.paragraph} font-poppins font-normal text-black md:w-[470px]  leading-[24px] mt-5`}>
      Our essays are tailored to meet the highest standards, ensuring you stand out in your academic pursuits.
      </p>


      </div>
        {/* content */}
        
        
        </div>  
          
        </div> 

       
    </section>
     </DynamicLeft>

  )
}

export default Essay