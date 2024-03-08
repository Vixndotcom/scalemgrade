import React from 'react'
import styles, { layout } from '../../style'
import { growth, menu, quality } from '../../assets'

const Expertise = () => {

  return (
    <section className={layout.section}> 

<div className={layout.sectionInfo}>
<h2 className={styles.heading2}>
Why Choose <span className='text'>Us</span>
</h2>
<div className={`flex flex-row p-2 rounded-[20px] mt-5`}>
<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>  
<img src={growth} alt="" />
</div>
{/* content */}
<div className="flex-1 flex flex-col ml-3">
<h4 className="font-poppins font-semibold color  text-[28px] leading-[23.4px] mt-1">
  Expertise
      </h4>

      <p className={`${styles.paragraph} font-poppins font-normal text-black  leading-[24px] mt-5`}>
      Our team comprises skilled writers, educators and data analysts with a deep understanding of academic requirements.
      </p>
</div>
{/* content */}

</div>















</div>






    </section>
  )
}

export default Expertise