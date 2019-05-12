import React, { Component } from 'react'
import { Link } from 'react-router-dom'


// The Header creates links that can be used to navigate
// between routes.
const header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/comp2'>comp2</Link></li>
        <li><Link to='/comp3'>comp3</Link></li>
      </ul>
    </nav>
  </header>
)

export default header
