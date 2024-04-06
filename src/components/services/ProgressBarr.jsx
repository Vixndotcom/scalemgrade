import React, { useEffect, useState } from 'react'
import Pbar from './Pbar';
import { height } from '../../assets';

function ProgressBarr () {

    return(
        <div>
            <h1 className='text-[36px] color mb-5 p-2'>Customer's Ratings </h1>
            <div className='metric text-[24px]'>
       <span> Precision</span>
       <Pbar value={100} />
            </div>
            <div className='metric mt-5 text-[24px]'>
       <span>Punctuality </span>
       <Pbar value={98}/>
            </div>
            <div className='metric mt-5 text-[24px]'>
       <span className='mb-2'>Delivery</span>
       <Pbar value={99}/>
            </div>

        </div>
    )
}



export default ProgressBarr