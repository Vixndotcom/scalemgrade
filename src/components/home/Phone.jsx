import React from 'react'
import styles, { layout } from '../../style'
import { phone } from '../../assets'


const Phone = () => {
  return (
    <section className={`${layout.section} mt-10`}>
    <div className={`${layout.sectionInfo}`}> 

    <h2 className={`${styles.heading2}`}>
    Get Started <br />With Us <br /> <span className='text'>Today </span>
    </h2>
    </div>
    <div className={`${layout.sectionImg}`}>
       <div>
        <img src={phone} alt="" />
       </div>
    </div>
    </section>
  )
}

export default Phone