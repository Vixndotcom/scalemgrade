import React from 'react'
import DynamicLeft from '../DynamicLeft'
import { carddd, desk, lamp, student } from '../../assets'
import Cardd from './Cardd'
import { Background, Parallax } from 'react-parallax'

function ImagesP () {
  return (

      
    //  <img src={desk} alt="" className='w-[96vw] mx-auto rounded-b-[8px]' />
    
         
    <Parallax strength={600} height={800} >
    <Background  className='mt-20 cell rounded-b-[8px]' style={{width:'96vw'}}  >
      
  <img src={desk}   />
    </Background>

    <div className='flex md:w-[240px] sm:w-[240px] ss:w-[480px] md:mt-10 text-center align-items-center p-2 textt  '>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos veritatis numquam hic, esse itaque nulla cupiditate
     qui, debitis libero ratione atque cumque deserunt ullam. Cupiditate voluptate exercitationem ad aperiam esse et
      quia autem similique vel labore quae dicta suscipit sint, quas ab. Quod asperiores illo eveniet, fugiat explicabo 
      fugit soluta quis natus recusandae 
  </div>
</Parallax>


  )
}

export default ImagesP