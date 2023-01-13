import React from 'react'
import "./Navbar.css"
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from "../../assets/logo.svg"
import "../../app.css"
import { useState } from 'react'


const Menu = () => {
  return (

    <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is Gpt?</a></p>
      <p><a href="#home">Open Ai</a></p>
      <p><a href="#feature">Case Study</a></p>
      <p><a href="#home">Library</a></p>
    </>
  )
}

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="" />
          <div className="gtp3__navbar_links-container">

            <Menu />

          </div>
        </div>



        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type='button' className='gpt3__navbar-sign-button'>Sign in</button>
        </div>


      </div>

      <div className="gpt3__navbar-menu">

        {toggleMenu
          ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#ffff' size={27} onClick={() => setToggleMenu(true)} />


        }
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center' >
            <div className="gpt3__navbar-menu_container-links">
              <Menu />

              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type='button' className='gpt3__navbar-sign-button'>Sign in</button>
              </div>

            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar
