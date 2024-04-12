import React from 'react'
import nav_logo from "../../assets/nav-logo.svg"
import nav_profile from "../../assets/nav-profile.svg"
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='admin_navbar'>
      <img src={nav_logo} alt="" className='nav_logo' />
      <img src={nav_profile} alt="" className='nav_profile' />
    </div>
  )
}

export default Navbar
