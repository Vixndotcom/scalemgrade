import React from 'react'
import styles, { layout } from '../../style'
import Paragraph from '../Paragraph'
import { lamp } from '../../assets'

const Backgroundd = () => {
  return (
    <section id='about'  className={`flex md:flex-row flex-col mt-20    ${styles.paddingY}  mb-5`}>
 <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 px-4 sm:px-16 `}>


 
 <div className="flex flex-row justify-between items-center w-full ">

<Paragraph>
  <h2 className='text-[28px] color font-normal p-2 btn-row mt-5'>
  Background
  </h2> 


  </Paragraph>
  </div>
<Paragraph >
  <p className={`${styles.paragraph} sm:w-[470px] md:w-[1024px] w mt-2 sm:p-2 p-4 text-black`}>
  At Scalemygrade, we're more than just a writing service. We're a team of experienced educators and talented writers
   committed to ensuring your academic success."
  </p>

  </Paragraph>

{/* <div>
  <img src={lamp} className='w-[50%]' />
</div> */}

{/* purpose */}


<div className="flex flex-row justify-between items-center w-full mt-5">



<Paragraph>
<h2 className='text-[28px] color font-normal p-2 btn-roww'>
Purpose
</h2>
</Paragraph>

 </div>

 <Paragraph>
<p className={`${styles.paragraph} sm:w-[470px] md:w-[1024px]   mt-2 sm:p-2 p-4 text-black`}>

Everyone faces challenges, but it's how we navigate through them that defines our path to success. 
At Scalemygrade, we understand the hurdles that students encounter on their academic journeys. Whether
 it's tackling complex assignments, crafting compelling essays, or mastering the art of 
impactful presentations, we're here to transform challenges into opportunities for growth.

</p>

</Paragraph>
{/* purpose */}





 </div>
     



    </section>
  )
}

export default Backgroundd
