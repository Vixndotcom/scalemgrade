import React, { useEffect, useState, useRef } from 'react'
import styles from '../../style';

const ParallaxText = () => {

const [scrollPosition, setScrollPosition] = useState(0);
const parallaxRef = useRef(null);

const handleScroll = () => {
    if (parallaxRef.current) {
        const elementTop = parallaxRef.current.getBoundingClientRect().top;
        setScrollPosition(window.scrollY - elementTop);
    }
};

     useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
     }, []);

 return(
    <div ref={parallaxRef} className='parallax-contain'>
        <div className='para-textt' style={{ transform: `translateY(-${scrollPosition * 0.1}px)` }}>
    
           <p className='text-white w-[312px] text-center   text-[20px] leading-[40px] '>
           <span className='text-[60px] text-yellow-500  '>"</span><br /> With a commitment to excellence, we offer a supportive environment where challenges are met with expertise, 
           dedication, and a genuine
            passion for academic success. Your journey is unique, and so are the solutions we tailor to meet your specific needs. <br /> <span className='text-[60px] text-yellow-500 '>"</span>
           </p>
        </div>
    </div>
 )
 


}

export default ParallaxText