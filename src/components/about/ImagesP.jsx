import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { card, desk } from '../../assets'


const ImagesP = () => {
  return (
    <Parallax strength={600} height={800} >
    <Background  className='mt-20 cell' style={{width:'100vw'}}  >
      
  <img src={desk}   />
    </Background>

    <div className='flex md:w-[370px] sm:w-[370px] ss:w-[470px] mt-10 text-center p-6 textt'>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur consectetur repellat, cumque, unde fugit atque error veniam distinctio doloribus tempora hic, voluptatum dolorem laborum. Earum vero placeat, quaerat sapiente ut minus praesentium odio ad eaque nostrum accusamus quo architecto quae voluptate temporibus dolore doloremque, quas itaque sunt voluptas esse eligendi amet nihil mollitia. Repellendus perspiciatis illo consequuntur eos vero qui quos nostrum doloribus. Tenetur recusandae exercitationem doloribus consequuntur, commodi perspiciatis dolorum molestias sed, libero hic similique facere voluptatum id est?


 
  </div>
</Parallax>

  )


  
}

export default ImagesP