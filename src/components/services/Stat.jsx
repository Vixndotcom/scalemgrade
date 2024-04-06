import React from 'react'
import Statement from './Statement';
import styles from '../../style';
import { grad } from '../../assets';


const Stat = () => {
  return (
    <Statement>
    
       <div className={`${styles.flexCenter} border-t-[1px] border-blue-700 mt-20 border-b-[1px]` }>
                <img src={grad} alt="" className='w-[320px] mt-8 rounded-[24px] mb-10' />
            </div>

       
    </Statement>
  )
}

export default Stat