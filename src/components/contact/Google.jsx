import React, { useState } from 'react'
import styles from '../../style'
import { close, menu } from '../../assets';
import Statement from '../services/Statement';

const Google = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
  setShowForm (!showForm)
  };
 
 
 
   return (
     <section id='contact ' className='mb-20'>

        <Statement>     
     <p className=' text-white  font-normal text-[24px] leading-40px] mt-10 md:w-[1020px] sm:w-[470px]'>
         
         Ready to begin your academic transformation? 
       </p>
       </Statement>

   <div className='sm:px-16 px-4'>
 
   <Statement>  
     <div className='p-4 '>



 
    <button onClick={toggleForm} className='text-white font-normal text-[20px] flex'> <span className='mt-4 mr-4'>Fill out the form below </span>
    <img src={showForm ? close : menu } className='w-[16%]' />
    </button> 
 
    
   </div>
   </Statement>
 
   {showForm && (
 
     <div className={`${styles.flexCenter} justify-content-center mt-10 mb-5 `}>
       <div className='mx-auto text-center '>
       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSHzjLdoicTX1ZOEfGmRkK_zW3s-4-q3cpzGDdg-E9R1egHw/viewform?embedded=true" 
       width="640" height="1280" frameborder="0" marginheight="0" marginwidth="0" className='forms'>Loading Form</iframe> 

       </div>
     </div>
 
 
   )}
     </div>
     </section>
 
   )
 }
export default Google