import React, { useEffect, useRef, useState } from 'react'

function Pbar  ({value, threshold })  {
    const [inViewport, setInViewport] = useState(false);
    const progressRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInViewport(true);
                }
            },{
                root: null,
                rootMargin: '0px',
                threshold: threshold || 0.5,
            }
        );
        if(progressRef.current){
            observer.observe(progressRef.current);
        }
        return() => {
            if(progressRef.current){
                observer.unobserve(progressRef.current);
            }
        };
    }, [])
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if(inViewport){
            const timer = setInterval(() => {
                setProgress((prevProgress) => {
                    const diff = value - prevProgress;
                    return prevProgress + (diff > 0 ? 1: -1)
                }) ;
            }, 20);

            return() => clearInterval(timer);
        }
    }, [value, inViewport])

  return (
    <div className='progressbar' ref={progressRef}>
        <div className='progresss' style={{width: `${progress}%`}}>
      
        </div>
    </div>
    
  )
}

export default Pbar