import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { card  } from '../../assets'


const ImageS = () => {
  return (
    
    <Parallax strength={600} height={800} >
    <Background  className='mt-20 cell p-4' style={{width:'100vw'}}  >
      
  <img src={card}   />
    </Background>

    <div className='flex md:w-[240px] sm:w-[240px] ss:w-[480px] md:mt-10 text-center align-items-center p-2 textt  '>
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum incidunt enim? Modi expedita odio dicta rem
 commodi libero, saepe recusandae, illum quidem laudantium minus, voluptatem odit praesentium doloremque facere soluta 
 voluptatum explicabo repellat officiis nihil nisi et? Facere sequi veritatis, numquam voluptatum nam culpa asperiores 
 assumenda recusandae non voluptas incidunt ex error
  </div>
</Parallax>

  )
}

export default ImageS