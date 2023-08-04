import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='Navbar'>
      <div className='logo'>
        <h1>Learn-<span className='logo-text'>Buddy</span></h1>
      </div>
      <div className="menu">
        <ul>
          <li>Home</li>
          <li>Dungeons</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="auth">
        <div className="login/register">
          <button>Login/Register</button>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Navbar