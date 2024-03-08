import React from 'react'
import Carousel from './Carousel'
import styles from '../../style'
import Statement from '../services/Statement'


const Choice = () => {

  return (
   < Statement >
    <section className=' justify-content-center align-items-center text-center mt-10 mb-10'>
     < div className=' '>
      <h2 className=' text-white text-center text-[32px] mt-5 mb-5  '>
       Why Choose Us
       </h2>
       
      </div>
    <div className='flex mx-auto'>
        <Carousel />
    </div>
    </section>
    </Statement>
  )
}

export default Choice