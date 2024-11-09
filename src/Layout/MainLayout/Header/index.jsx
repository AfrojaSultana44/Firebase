import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{display: 'flex', gap: "20px", marginBottom: "20px"}}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Log in</NavLink>
    </div>
  )
}

export default Header