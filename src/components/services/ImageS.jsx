import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { card  } from '../../assets'


const ImageS = () => {
  return (
    
    <Parallax strength={600} height={800} >
    <Background  className='mt-20 cell' style={{width:'100vw'}}  >
      
  <img src={card}   />
    </Background>

    <div className=' w-[370px] mt-10 textt'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis est magni 
blanditiis consequuntur, hic consectetur necessitatibus assumenda
 reprehenderit perspiciatis. Quae pariatur sapiente nam explicabo 
 minus. Temporibus, praesentium eos! Assumenda, veniam exercitationem 
 qui id dolor, maxime odit error, deleniti iste repellendus suscipit
  voluptas perferendis quia minus laboriosam nesciunt culpa nostrum!
   Perferendis quia magnam consectetur, esse aliquam itaque error? Numquam, atque illo!
  </div>
</Parallax>

  )
}

export default ImageS