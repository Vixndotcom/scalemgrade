import React, { useState } from 'react'
import Slider from 'react-slick'
import { boyy, cv, desk, expert, girl, group, growth, library, quality, student, team } from '../../assets';
import styles from '../../style';
import Statement from '../services/Statement';


const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (index) => {
     setCurrentSlide(index);
    };



  return (
    <div style={{position:'relative', maxWidth: '360px', margin: '24px auto'}} >


     <div style={{ overflow: 'hidden', borderRadius: '8px'}}>
   

      <div style={{
        display: 'flex', 
      transition: 'transform 0.5s ease-in-out',
      transform: `translateX(${-currentSlide * 100}%)`,
      }}
      >
       <div style={{width: '100%', height:'480px', flex: '0 0 auto', background: 'white'}}>
      
        {/* head */}
<div className='h-[240px]'>
       
    
        <div className='flex flex-row mx-2 mt-2'>

         <div className={`w-[56px] h-[56px] rounded-full ${styles.flexCenter} `}>  
         <img src={growth} alt="" />
        </div>
         <h1 className='text-center font-semibold text-[28px] p-4 color border-b-[1px] border-b-blue-600'>
       Expertise
        </h1>

</div>




        <p className='text-left text-[18px] font-normal p-4 leading-[32px] mb-2 '>
        Our team comprises skilled writers, educators and data analysts with a deep 
        understanding of academic requirements.
        </p>
      </div>

        <div className='h-[200px]'>
          <img src={boyy} alt="" />
        </div>
       </div>
      
 {/* card 2 */}
       <div style={{width: '100%', height:'480px',  flex: '0 0 auto', background: 'white'}}>
        

              {/* head */}
 <div className='h-[240px]'>
          <div className='flex flex-row mx-2 mt-2'>

          <div className={`w-[56px] h-[56px] rounded-full ${styles.flexCenter} `}>  
         <img src={quality} alt="" />
        </div>
        <h1 className='text-center font-semibold text-[28px] p-4 color border-b-[1px] border-b-blue-600'>
          Originality
        </h1>

 </div>

        <p className='text-left text-[18px] font-normal p-4 leading-[32px] mb-2 '>
        Every assignment, essay, or presentation is crafted with originality, ensuring uniqueness and authenticity.
        </p>
 </div>

        <div className='h-[200px]'>
          <img src={cv} alt="" />
        </div>










       </div>

       {/* card 3 */}
       <div style={{width: '100%',height:'480px', flex: '0 0 auto', background: 'white'}}>
        
               {/* head */}
 <div className='h-[240px]'>

               <div className='flex flex-row mx-2 mt-2'>

              <div className={`w-[56px] h-[56px] rounded-full ${styles.flexCenter} `}>  
          <img src={team} alt="" />
            </div>
           <h1 className='text-center font-semibold text-[28px] p-4 color border-b-[1px] border-b-blue-600'>
            Support
            </h1>

</div>


       
        <p className='text-left text-[18px] font-normal p-4 leading-[32px] mb-2 '>
        Beyond writing, we provide support and guidance to empower you on your academic path.
        </p>
</div>

        <div className='h-[200px] '>
          <img src={student} alt="" className='object-contain'/>
        </div>










       </div>
       {/* card */}
      </div>
     </div>




        <div style={{textAlign:'center', marginTop:'10px'}}>
            {Array.from({length: 3}).map((_, index) => (
                <span key={index} style={{
                    display: 'inline-block',
                    width: '32px',
                    height: '32px',
                    borderRadius: '40%',
                    background: currentSlide === index ? 'white' : 'yellow', 
                    margin: '0 5px',
                    cursor: 'pointer'
                }} onClick={() => handleSlideChange(index)}>

                </span>
            ))}
        </div>
    </div>
  );
};

export default Carousel