import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h1>Header</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search'>Search</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header