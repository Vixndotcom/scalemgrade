import React from 'react'
import styles, { layout } from '../../style'
import { menu, team } from '../../assets'

const Support = () => {
  return (
    <section className={layout.section}> 
<div className={layout.sectionInfo}>
<div className={`flex flex-row p-2 rounded-[20px] `}>
<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>  
     <img src={team} alt="" />
     </div> 

   {/* content */}
   <div className="flex-1 flex flex-col ml-3">

<h4 className="font-poppins font-semibold color  text-[28px] leading-[23.4px] mt-1">
Support
</h4>


<p className={`${styles.paragraph} font-poppins font-normal text-black  leading-[24px] mt-5`}>
Beyond writing, we provide support and guidance to empower you on your academic path.


</p>


</div>
{/* content */}



</div>
</div>
    </section> 
  )
}

export default Support