import React from 'react'
import { data, quality } from '../../assets'
import styles, { layout } from '../../style'


const Data = () => {
  return (
    <section className={`${layout.sectionReverse} mt-5 mb-20`}> 
       <div className={`${layout.sectionImgReverse}`}>
        <img src={data} alt="" className='w-[100%] h-[90%] mx-auto'   />
       </div>

      <div className={layout.sectionInfo}>
        
      <div className={`flex flex-row p-2 rounded-[20px] `}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter}  border-[2px] border-blue-600`}>  
    <h1> 04</h1>
     </div> 
        {/* content */}
        <div className="flex-1 flex flex-col ml-3">

        <div className="font-poppins font-normal color  text-[28px] leading-[23.4px] mt-1">
        <h4>Data</h4>
        <h4 className='mt-4'>Analysis</h4>
      </div>

    
      <p className={`${styles.paragraph} font-poppins font-normal text-black  leading-[24px] mt-5`}>
      In a world driven by insights, we go beyond words. Our data analysis service at Scalemygrade brings a new dimension to your academic projects. Uncover patterns, visualize trends, and add a layer of depth to your work. 
      </p>


      </div>
        {/* content */}
        
        
        </div>  
          
        </div> 
    </section>
  )
}

export default Data