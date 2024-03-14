import React, { useEffect, useState } from 'react'
import Pbar from './Pbar';
import { height } from '../../assets';

function ProgressBarr () {

    return(
        <div>
            <h1 className='text-[36px] color mb-5 p-2'>Customer's Ratings <span><img src={height} className='w-[128px] h-[120px] shadow-text' /></span></h1>
            <div className='metric text-[24px]'>
       <span> Precision</span>
       <Pbar value={94} />
            </div>
            <div className='metric mt-5 text-[24px]'>
       <span>Punctuality </span>
       <Pbar value={95}/>
            </div>
            <div className='metric mt-5 text-[24px]'>
       <span className='mb-2'>Delivery</span>
       <Pbar value={92}/>
            </div>

        </div>
    )
}



export default ProgressBarr