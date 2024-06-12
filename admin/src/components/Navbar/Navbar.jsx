import React from 'react'
import './Navbar.css'
import { assets } from "../../assets/assets"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={assets.gourmet} alt="" />
      <img className='profile' src={assets.profile_picture} alt="" />
      
    </div>

    
  )
}

export default Navbar
