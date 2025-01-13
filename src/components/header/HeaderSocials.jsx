import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

function HeaderSocials() {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/farwamohibzada/" target='__blank'><BsLinkedin /></a>
        <a href="https://github.com/FarwaMuhibZada" target='__blank'><FaGithub /></a>
        <a href="https://dribbble.com" target='__blank'><FiDribbble/></a>
    </div>
  )
}

export default HeaderSocials