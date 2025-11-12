import React from 'react'
import { Link } from 'react-router'

export default function Navbar() {
  return (
    
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quiz">Quiz</Link></li>
        <li><Link to="/result">Result</Link></li>
      </ul>
    </nav>
    
  )
}
