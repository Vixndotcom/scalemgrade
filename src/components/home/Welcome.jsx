import React, { useEffect, useState } from 'react'
import styles, { layout } from '../../style';
import { boy, girl } from '../../assets';
import { Background, Parallax } from 'react-parallax';
import { ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax';

import ParallaxInfo from './ParallaxInfo';
import { Link } from 'react-router-dom';


const Welcome = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handScroll = () => {
      setScrollPosition(window.scrollY);
    };

      window.addEventListener('scroll', handScroll);
      return () => {
        window.removeEventListener('scroll', handScroll);
      };

  }, []);

  const parallaxStyle= {
    transform: `translateY(-${Math.max(0, scrollPosition - 200) * 0.2}px)`
  }

  return (
   
    <section className={`${layout.section} mt-10`}>
      <div className={`${layout.sectionInfo}`}> 
 <div className='parallax-container'> 



{/* <div className='parallax-text' style={{transform: `translateY(-${scrollPosition * 0.2}px)`}}> */}
<div className='parallax-text' style={parallaxStyle}>
    <h2 className={`${styles.heading2} mt-5`}>
    Welcome to  <br /> <span className='text'>Scalemygrade! </span>
    </h2>
    <p className={`${styles.paragraph} mt-5 text-black max-w-[470px]`}>
    Ready to excel in your studies without the stress? Congratulations on finding us! Let's transform your 
    assignments, essays, and presentations into academic masterpieces together. We also help analyse your 
    data and help with your thesis. 
    </p> 
      <button className='p-4 get-started cursor-pointer mt-10'>
        <Link to ='/contact'>Get started</Link>
      </button>
   

  </div>
  </div> 
  </div>  

  <div className={`${layout.sectionImg}`}>
     {/* <Parallax bgImage={boy} strength={500}>
  <div style={{height: '500px', width: '576px' , display:'flex', alignItems: 'center', justifyContent: 'center'}}>
  <div style={{width: '100%', maxWidth: '576px', height: 'auto'}}>
<h1>
  tolani
</h1>
  </div>
  </div>
    </Parallax>
        */}
   <ParallaxInfo />

    
    </div>  
     
      
    </section>


  )
}

export default Welcome