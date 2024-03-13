import React, { useEffect, useState } from 'react'
import styles, { layout } from '../../style';
import { analyse, babe, boy, desk, girl } from '../../assets';
import { Background, Parallax } from 'react-parallax';


import ParallaxInfo from '../home/ParallaxInfo';
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
    <h2 className='text-[36px] text-black font-bold '>
    We believe in the  <br /> <span className='color'>Transformative Power </span> of Education
    </h2>
    <p className={`${styles.paragraph} mt-5 text-black max-w-[470px]`}>
Unburdening your academic workload one assessment step at a time 
    </p> 
      {/* <button className='p-4 get-started cursor-pointer mt-10'>
        <Link to ='/contact'>Get started</Link>
      </button> */}
   

  </div>
  </div> 
  </div>  

  <div className={`${layout.sectionImg}`}>
      <Parallax bgImage={desk} strength={500}>
  <div style={{height: '300px',  display:'flex', alignItems: 'center', justifyContent: 'center'}} className='w-screen'>
  <div style={{width: '500px', maxWidth: '500px',display:'flex', height: 'auto', marginRight:'auto', marginLeft:'auto'}} >

  <img src={analyse} className='w-[25%] ' />
  <h1 className='text-[22px] font-semibold text-white text-start mt-6 capitalise'>
    JOIN US ON THE <br />LEARNING JOURNEY
  </h1>

  

  </div>
  </div>
    </Parallax>
        
   {/* <ParallaxInfo /> */}

    
    </div>  
     
      
    </section>


  )
}

export default Welcome