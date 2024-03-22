import React, { useRef } from 'react'
import { animated, useSpring, } from 'react-spring'
import { InView, useInView } from 'react-intersection-observer'

const PopUp = ({children}) => {
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.5
  ,
});

// const imgRef = useRef(null);

const popUpanimation = useSpring({
  transform: InView ? 'scale(1.2)' : 'scale(1)',
  config: {tension: 300, friction: 20}
});



return(
  <animated.div ref={ref} style={popUpanimation}>
     {React.cloneElement(children)}
  </animated.div>
      
    
);
};


export default PopUp;

















