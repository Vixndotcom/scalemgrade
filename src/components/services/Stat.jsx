import React from 'react'
import Statement from './Statement';
import styles from '../../style';
import { grad } from '../../assets';


const Stat = () => {
  return (
    <Statement>
        <div className=' mt-5 border-t-[1px] border-dimWhite '>
        <div className={`${styles.flexCenter} flex flex-col  items-center text-center `}>

           

        <p className='w-[320px] md:w-[470px] text-center text-white mx-auto mt-5 leading-[28px]  text-[20px] leading-[40px]
         '><span className='text-[60px] text-yellow-500 '>"</span> <br />
         Your story matters. We assist in creating personal statements
         that captivate and leave a lasting impression for undergraduate
          and postgraduate studies. <br /><span className='text-[60px] text-yellow-500 '  >"</span>
        </p>

       <div>
                <img src={grad} alt="" className='w-[320px] mt-8 rounded-[24px] mb-10' />
            </div>

        </div>
        </div>
    </Statement>
  )
}

export default Stat