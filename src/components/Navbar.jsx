import React, { useState } from 'react'
import { close, icon, menu } from '../assets';
import { Link } from 'react-router-dom';
import {nav} from '../constantss'


const Navbar = () => {
const[navList, setNavList] = useState (false);  
 const [active, setActive] = useState("Home");


const handleSelection =() => {
 setNavList(false);

};



return (
  <>
  <navbar  className='nav-section xl:w-[40%]  md:w-[80%]  sm:w-[88%] ss:w-[100%]  z-[999] '>
    {/* centeral div */}

  <div className='w-full flex py-6 justify-between items-center navbar bg-transparent'>

      <div className='logo flex flex-row'>
        <img src={icon} alt="" className='w-[56px] h-[60px]' />
        <h4 className='text-[12px] text-white mt-1 font-bold mx-1'>
          Scale <br />
          <span className='mt-1 mb-1'>My</span> 
          <br />
           <span>Grade</span> 
        </h4>
        </div>

   {/* listed item */}

   <div className='mr-12'>

   <ul className='sm:flex hidden list-none justify-end items-center flex-1'> 
   {nav.map((list, index) => (
            <li key= {index} className={`font-poppins font-normal cursor-pointer text-[20px]
            text-yellow-400  ${index === nav.length - 1 ? 'mr-0' : 'mr-10'} `} onClick={() => setActive(list.text)} >
            <Link to={list.path}>{list.text}</Link>
            </li>
          )
           
          
          
          )}

         </ul>



 {/* toggle */}

<div className='sm:hidden flex flex-1 justify-end'>
<img src={navList ? close : menu} alt=""  className='w-[64px] h-[64px] cursor-pointer  z-[99]'
onClick={() => setNavList((prev) => !prev)}/>

<div className={`${navList ? 'flex' : 'hidden'} p-8 bg-nav
absolute  right-2  mx-4  w-full h-screen top-0 sidebar`}>


<ul className='  list-none justify-end items-center flex-1 mt-20 '>
 {nav.map((list, index) => (
  <li key={list.path} className={`font-poppins font-normal cursor-pointer p-4 mt-5 outlinee text-[32px]
  ${index === nav.length - 1 ? 'mr-0' : 'mb-4'}`} 
  onClick={handleSelection}>


<Link to={list.path}>{list.text}</Link>


  </li>
 ))}
</ul>
</div>





</div>


 {/* toggle */}






   </div>
   {/* listed item */}
  </div>
    {/* centeral div */}

  </navbar>
  
  </>
)

};







export default Navbar