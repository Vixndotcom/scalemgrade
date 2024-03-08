import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated} from 'react-spring';



const Statement = ({children}) => {
const [ref, inView] = useInView ({
    triggerOnce: true,
    threshold: 0.5,

});



 const slideInAnimation = useSpring({
   opacity: inView ?  1 : 0,
   transform: inView ? 'translateY(0)' : 'translateY(50%)',
 });

 return (
    <div ref={ref}>
 <animated.div style={slideInAnimation}>
  {children}
</animated.div>
</div>

)


};

export default Statement