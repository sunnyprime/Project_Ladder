import React from 'react'
import './Navbar.css'
import {NavLink} from 'react-router-dom';

function Navbar() {
  return (
<nav>
<input type="checkbox" id="check" />
<label for="check" class="checkbtn">
        <i class="	fa fa-plus-square"></i>
      </label>
      <label class="logo">DesignX</label>
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home </NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About </NavLink></li>
        <li><NavLink to="/service" activeClassName="active">Service</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        <li><NavLink to="/feedback" activeClassName="active">Feedback</NavLink></li>
      </ul>
</nav>

  )
}

export default Navbar
