import React from 'react'

const SvgCode = () => {
  return (
    
//     <svg xmlns="http://www.w3.org/2000/svg" 
//     width="200px" height="200px">
//     <defs>
//          <linearGradient id="GradientColor" cx='50%' cy='50%' r='50%' fy='50%'>  
//         {/* <linearGradient id="GradientColor" >  */}
//           <stop offset="0%" style={{ stopColor: 'blue', stopOpacity: 1}} />
//           <stop offset="100%" style={{ stopColor: 'red', stopOpacity: 1}} />
//        </linearGradient>
//     </defs>
//     <circle cx="100" cy="100" r="70" stroke-linecap="round" />
// </svg>   

<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
<defs>
   <linearGradient id="GradientColor">
      <stop offset="0%" stop-color="blue" stopOpacity={1}/>
      <stop offset="100%" stop-color="red"  stopOpacity={1}/>
   </linearGradient>
</defs>
<circle cx="80" cy="80" r="70" stroke-linecap="round" />
</svg>


      
  )
}

export default SvgCode