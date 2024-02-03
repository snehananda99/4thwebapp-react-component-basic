import React from 'react'
import './Navbar.css'
import {Link}  from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="/service">Services</a>
        </li>
        <li>
          <Link to="/category">Category</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar