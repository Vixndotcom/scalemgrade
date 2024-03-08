import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from '../../style'
import Navbar from '../Navbar'
import Home from '../home/Home'
import Footer from '../Footer'
import About from '../about/About'
import Services from '../services/Services'
import Contact from '../contact/Contact'
import {lazy}  from 'react'
import Loader from './Loader'


const LazyHome = React.lazy(() => import('../home/Home'))
const LazyAbout = React.lazy(() => import('../about/About'))
const LazyServices = React.lazy(() => import('../services/Services'))
const LazyContact = React.lazy(() => import('../contact/Contact'))

const Pages = () => {
  return (
    <>
    <Router>

    <div className={` ${styles.paddingX} ${styles.flexCenter} w-full overflow-hidden text-white`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <Routes>
    
    <Route exact path ='/' element={<React.Suspense fallback={<div><Loader /></div>}><LazyHome /></React.Suspense>} />
    <Route exact path ='/about' element={<React.Suspense fallback={<div><Loader /></div>}><LazyAbout /></React.Suspense>} />
    <Route exact path ='/services' element={<React.Suspense fallback={<div><Loader /></div>}><LazyServices/></React.Suspense>} />
    <Route exact path ='/contact' element={<React.Suspense fallback={<div><Loader /></div>}><LazyContact /></React.Suspense>}/>
    </Routes>



         
        <div className={`bg-black  ${styles.paddingX} ${styles.flexStart} bg-navy`}>
        <div className={`${styles.boxWidth}`}>
          
    
           < Footer/> 
      
        </div>
      </div> 

    </Router>
    
    
    </>
  )
}

export default Pages