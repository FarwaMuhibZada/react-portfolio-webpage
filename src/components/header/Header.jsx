import React from 'react'
import CTA from './CTA'
import './header.css'
import ME from '../../assets/developer.png';
import HeaderSocial from './HeaderSocials'

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h2>Farwa Muhibzada</h2>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial/>

        <div className="me">
          <img src={ME} alt="ME" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header