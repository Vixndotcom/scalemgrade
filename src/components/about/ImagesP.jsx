import React from 'react';
import { boy, boyy, desk, girl, lamp, library, student } from '../../assets';
import { Parallax } from 'react-parallax';
import Cardd from './Cardd';


const ImagesP = () => {
    const containerStyle = {
        height: '30vh',
        width: '1000px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',

    };

    const imageStyle = {
       width: '60%',
       height: 'auto',
       maxHeight: '20%',
    };


  return (
    <div style={containerStyle}>
        <Parallax bgImage={lamp} strength={600}>
            <div style={containerStyle}>
                  {/* < alt=""  style={imageStyle}/>   */}
               {/* tolani */}
            </div>

        </Parallax>
    </div>
  )
}

export default ImagesP