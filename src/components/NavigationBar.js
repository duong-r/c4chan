import React from 'react'
import { Link } from 'react-router-dom'

const NavigationBar = () => {
  return (
  <nav className="navbar">
    <h1>Welcome to C4Chan</h1>
    <div className="links">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
    </div>
  </nav>
  )
}

export default NavigationBar
