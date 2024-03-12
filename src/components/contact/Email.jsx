import React from 'react'
import styles from '../../style'
import { arrow, cardd, expert, whatsapp, } from '../../assets';
import Statement from '../services/Statement';

const Email = () => {
   const emailAddress = 'Scalemygrade@gmail.com';
 const phoneNumber = '447831677219'
 
 const openWhatsapp = () => {
  window.open(`https://wa.me/${phoneNumber}`);
 };

  return (
    <section className='mt-20 mb-5 ' >
     
        <div className='sm:px-16 px-4 '>
        <Statement>
      <p className={`${styles.paragraph} text-white  font-normal text-[32px] leading-[31.4px]  head-text  mt-3 p-4 mx-1 `}>      
            For Inquires 
      </p>
      </Statement>

      <Statement>
      <p className={`${styles.paragraph} text-white flex light font-normal text-[20px] p-4 mx-1 cursor-pointer`}  >
        
          <a href={`mailto:${emailAddress}`}>{emailAddress}<img src={expert} alt="" className='w-[8%] mt-1' /> </a>
          
      </p>
      </Statement>
      
      <Statement>

      <p className={`${styles.paragraph} text-white light font-normal text-[20px] p-4 mx-1 cursor-pointer`} onClick={openWhatsapp} >
        
       Chat on Whatsapp <span><img src={whatsapp} alt="" className='w-[8%]' onClick={openWhatsapp} /></span>
      </p>
      </Statement>

      
      </div >
     
    </section>
  )
}

export default Email;