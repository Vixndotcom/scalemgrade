import React from 'react'
import styles, { layout } from '../../style'
import Progress from './Progress'


const ProgressBar = () => {
  return (
    <section className={`${layout.sectionReverse} p-gap mb-5 `}>
  
      


<div className={`${layout.sectionImgReverse} `}>
         <div className={`${styles.flexCenter} items-center sm:gap-4 md:gap-8 md:flex-row sm:flex-row flex-row  ` }>

<div className='p-2 md:mr-10  ss:mr-0'>
<div >
 <Progress />
</div>
<div className={`${styles.flexCenter}flex text-center align-items-center justify-content-center `}>
 <h1 className='font-semibold text-black text-[28px] sm:text-[20px] flex text-center align-items-center justify-content-'>
        Quality
 </h1>
</div>  
</div> 

<div className='p-2 md:ml-10 ss:ml-0 '>
<div >
 <Progress />
</div>
<div className={`${styles.flexCenter}flex text-center align-items-center justify-content-center `}>
 <h1 className='font-semibold text-black text-[28px] sm:text-[20px] flex text-center align-items-center justify-content-'>
        Efficiency
 </h1>
</div>  
</div> 


</div>


 </div>

      {/* heading */}

      <div className={`${layout.sectionInfo} items-end `}>
      <h2 className={`${styles.heading2} text-end`}>
     Delivering <br />The Best <br /> <span className='text'>Results </span>
    </h2>
     <p className='text-black text-[16px] p-2'>We thrive on delivering your success</p>
      </div>
    </section>
  )
}

export default ProgressBar