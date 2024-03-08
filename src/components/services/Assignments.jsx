import React from 'react'
import styles, { layout } from '../../style'
import {assignment, quality } from '../../assets'



const Assignments = () => {

// Animation



  return (
    <section className={`${layout.section} mt-5 `}> 
      <div className={layout.sectionInfo}>
        
      <div className={`flex flex-row p-2 rounded-[20px] `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} border-[2px] border-blue-600`}>  
     <h1> 01. </h1>
     </div> 
        {/* content */}
        <div className="flex-1 flex flex-col ml-3">

        <div className="font-poppins font-normal color  text-[28px] leading-[23.4px] mt-1">
        <h4>Assignment</h4>
        <h4 className='mt-4'>Mastery</h4>
      </div> 
        
    
      <p className={`${styles.paragraph} font-poppins font-normal text-black md:w-[470px] leading-[24px] mt-5`}>
      Our expert writers ensure your assignments shine with originality and precision.
      </p>


      </div>
        {/* content */}
        
        
        </div >  
          
        </div> 

        <div className={`${layout.sectionImg}`}>
         <img src={assignment} alt="" className='w-[100%] h-[90%] mx-auto' />
        </div>
    </section>
  )
}

export default Assignments