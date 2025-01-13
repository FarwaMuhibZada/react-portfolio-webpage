import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Certificates from './components/certificates/Certificates'
import Footer from './components/footer/Footer'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About/>
    <Experience/>
    <Portfolio/>
    <Certificates/>
    <Contact/>
    <Footer/>
    </>

  )
}

export default App;