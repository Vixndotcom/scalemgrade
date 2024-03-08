import React from 'react'
import { useInView } from 'react-intersection-observer';
import { useSpring, animated} from 'react-spring'



//     const [scrollY, setScrollY] = useState(0);
//     const [isActive, setIsActive] = useState(false);

//     const handleScroll = () => {
//         setScrollY(window.scrollY);
     
// };
//     useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//        useEffect(() => {
//         const element= document.getElementById('slide-in-from-left');
//         if (element) {
//             const rect = element.getBoundingClientRect();
//             setIsActive(rect.left <= window.innerWidth && rect.right >=0);
//         }
//        },  [scrollY]);

//     const fadeinAnimation = useSpring({
//         opacity: isActive ? 1 : 0,
//         transform:  isActive ? 'translateX(0)' : 'translateX(-100%)',
//         config: config.default,
//     });



//   return (
//     <animated.div id='slide-in-from-left' style={fadeinAnimation}>
//        {children}
//     </animated.div>
//   )
// }

const DynamicLeft = ({ children }) => {
    const [ref, inView] = useInView ({
        triggerOnce: true,
        threshold: 0.5,
    
    });
    
    
    
     const slideInAnimation = useSpring({
       opacity: inView ?  1 : 0,
       transform: inView ? 'translateX(0)' : 'translateX(-100%)',
     });
    
     return (
        <div ref={ref}>
     <animated.div style={slideInAnimation}>
     {children}
    </animated.div>
    </div>
    
    )
    
    
    };
    
    export default DynamicLeft

