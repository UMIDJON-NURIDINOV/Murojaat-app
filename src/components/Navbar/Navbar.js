import React from 'react'
import './navbar.css'


export default function Navbar() {

  const hendliLogOut = ()=>{
    localStorage.clear()
    window.location.reload()
  }

  return (
    <div>
      <nav>
        <div class="nav-wrapper">
          <a href="#" className="brand-logo"> Murojaat & Javob</a>
          <ul className="right hide-on-med-and-down">
            <li><a href="sass.html">Sass</a></li>
            <li><button onClick={hendliLogOut}>Log out</button></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
