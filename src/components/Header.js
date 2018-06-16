import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <h2>RR Simple Library</h2>
      <div className="header__nav">
        <NavLink to="/" activeClassName='activeNav' exact></NavLink>
        <NavLink to="/add" activeClassName='activeNav'>Add Book</NavLink>
      </div>
    </header>
  )
}

export default Header
