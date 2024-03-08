import React from 'react';
import { boy, girl, library, student } from '../../assets';
import { Parallax } from 'react-parallax';


const ParallaxInfo = () => {
    const containerStyle = {
        height: '33.3vh',
        width: '900px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    const imageStyle = {
       width: '100%',
       height: 'auto',
       maxHeight: '100%',
    };


  return (
    <div style={containerStyle}>
        <Parallax bgImage={library} strength={600}>
            <div style={containerStyle}>
                 {/* <img src={library} alt=""  style={imageStyle}/>  */}
               {/* tolani */}
            </div>

        </Parallax>
    </div>
  )
}

export default ParallaxInfo