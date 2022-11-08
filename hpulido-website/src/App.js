import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Portafolio from './components/Portafolio'
import Experience from './components/Experience'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portafolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}
