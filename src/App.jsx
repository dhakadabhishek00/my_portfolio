// import { useState } from 'react'

import './App.css'
import './index.css'
import NavBar from '../components/NavBar';
import About from '../components/About';
import Footer from '../components/Footer';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import ShowProject from '../components/ShowProject'
import HeroSection from '../components/HeroSection';


function App() {
  return (
    <>
    <div className="min-h-screen w-full flex flex-col">
   <NavBar></NavBar>
    <main className="flex-1 pt-15">    
        <Routes>
           <Route path='/' element={<HeroSection/>}/>
           <Route path='/about' element={<About/>}/>
            <Route path='/Skills' element={<Skills/>}/>
              <Route path='/contact' element={<Contact/>}/>
                <Route path='/projects' element={<ShowProject/>}/>
        </Routes>
   </main>
   <Footer></Footer>
    </div>      
    </>
  )
}

export default App
