import React from 'react'
import { Background, Parallax } from 'react-parallax'
import { card, desk } from '../../assets'


const ImagesP = () => {
  return (
    <Parallax strength={600} height={800} >
    <Background  className='mt-20 cell' style={{width:'100vw'}}  >
      
  <img src={desk}   />
    </Background>

    <div className='flex w-[370px] mt-10 text-center p-6 textt'>
 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum, quibusdam, magni nihil \
 voluptatibus iusto laborum consequatur excepturi recusandae dignissimos nesciunt a dolorem 
 commodi ab ducimus distinctio molestiae cumque exercitationem necessitatibus odio sequi! Debitis 
  
 quibusdam ratione accusamus libero velit doloribus, fugiat fuga asperiores neque maiores id?


 
  </div>
</Parallax>

  )


  
}

export default ImagesP