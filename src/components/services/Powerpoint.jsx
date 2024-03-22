import React from 'react'
import { power, quality } from '../../assets'
import styles, { layout } from '../../style'


const Powerpoint = () => {
  return (
    <section className={`${layout.section} mt-5`}> 
      <div className={layout.sectionInfo}>
        
      <div className={`flex flex-row p-2 rounded-[20px] `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  border-[2px] `}>  
     <h1 className='text-white'> 03. </h1>
     </div> 
        {/* content */}
        <div className="flex-1 flex flex-col ml-3">

        <div className="font-poppins font-normal text-white text-[28px] leading-[23.4px] mt-1">
        <h4>PowerPoint</h4>
        <h4 className='mt-4'>Prowess</h4>
      </div>

    
      <p className={`${styles.paragraph} font-poppins font-normal text-white  leading-[24px] mt-5`}>
      Elevate your presentations with compelling visuals and impactful content. Let your ideas take center stage.
      </p>


      </div>
        {/* content */}
        
        
        </div>  
          
        </div> 

        
        <div className={`${layout.sectionImg}`}>
         <img src={power} alt="" className='w-[100%] h-[90%] mx-auto' />
        </div>
    </section>
  )
}

export default Powerpoint