import React, { useEffect } from 'react'
import { animated, useSpring } from 'react-spring'


const Text = ({children}) => {

     const [animate, setAnimate] = React.useState(false);
    // const [animate, setAnimate] = useState(false);

       useEffect(() => {
        const delay = setTimeout(() => {
            setAnimate(true);
        }, 1000)

        return() => clearTimeout(delay);
       }, []);


 const popAnimation = useSpring ({
    from: { opacity: 0, transform: 'scale(0.2)'},
    to: { opacity: 1, transform: 'scale(1)'},
    config: {tension: 200, friction: 40},
    onRest: {transform: 'scale(1.1)' , tension:300, friction: 45}, 
 })

  return (
    <animated.div style={popAnimation}>{children}</animated.div>
  );
};

export default Text