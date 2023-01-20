import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Creates the Navigation Bar that includes links
 * to other user-accessible pages.
 */
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
