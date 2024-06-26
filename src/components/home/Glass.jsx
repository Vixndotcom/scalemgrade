import React from 'react'
import ImageH from './ImageH'
import { Parallax } from 'react-parallax'
import { Background } from 'react-parallax'
import { asian } from '../../assets'

const Glass = () => {
  const containerStyle = {
    height: '60vh',
     width: '400px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
   zIndex: 1,
   overflow: 'visible'
};

 const imageStyle = {
  // position: 'relative',
  height: '100vh',
  width: '400px',
 display: 'flex',
 alignItems: 'center',
 justifyContent: 'center',
 marginRight: 'auto',
 marginLeft: 'auto',
zIndex: 2,
borderRadius: '24px',
 overflow: 'visible'
 };




  
  return (
    <div style={{textAlign: 'center', height:'90vh'}}>
<div>

    <Parallax strength={600} 
    bgImage={asian}
    style={{
      position: 'relative',
      height: '90vh',
      width: '360px',
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     marginRight: 'auto',
     marginLeft: 'auto',
    zIndex: 1,
    BackgroundPosition: 'center',
    // overflow: 'visible',

    }} 
    >
    
    
      <div style={{position:'absolute', top: '50%', left:'50%', zIndex: 2 , 
      textAlign:'center', transform:'translate(-50%, -50%)', alignItems: 'center', }}>
       <div style={{ imageStyle}}>
         <ImageH />
       </div>
      
      </div>
  
  
</Parallax>
  
</div>
</div>
  );

};

export default Glass