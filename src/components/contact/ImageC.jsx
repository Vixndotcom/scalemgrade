import React from 'react'
import styles from '../../style'
import Statement from '../services/Statement'
const ImageC = () => {
  return (
    <section className={`${styles.flexStart} flex  flex-col align-items-center mt-10`}>
    <div className={`${styles.flexStart} flex  align-items-center `}>
      <Statement>
      <p className='text-[24px] text-white leading-[40px] md:w-[1020px] sm:w-[470px]'>
      We're on standby to connect with you! Expect our prompt response as we gear up to turn your academic aspirations into 
      achievements. Your journey to excellence starts here!


      </p>
      </Statement>
       </div>
     

    </section>
  )

}

export default ImageC