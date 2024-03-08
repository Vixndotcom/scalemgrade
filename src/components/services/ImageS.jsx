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
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos voluptatum incidunt enim? Modi expedita odio dicta rem commodi libero, saepe recusandae, illum quidem laudantium minus, voluptatem odit praesentium doloremque facere soluta voluptatum explicabo repellat officiis nihil nisi et? Facere sequi veritatis, numquam voluptatum nam culpa asperiores assumenda recusandae non voluptas incidunt ex error minus unde, illum, dignissimos consequatur provident expedita exercitationem sapiente quibusdam. In quibusdam fugiat ipsum tenetur cupiditate eum optio nihil vero quod eveniet aperiam, ratione vel incidunt consequatur laudantium doloribus praesentium porro ab enim odio aut aliquid! Optio hic illum doloribus cumque commodi a aspernatur, sunt esse ad quas nihil provident quaerat, iusto nisi, eius facilis incidunt officiis sint iure et at accusantium excepturi possimus. Tempora, dignissimos impedit.
  </div>
</Parallax>

  )
}

export default ImageS