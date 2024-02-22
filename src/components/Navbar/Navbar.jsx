import React, {useState} from 'react'
import style from './Navbar.module.css'
import {FaBars} from 'react-icons/fa6'

function Navbar() {

const [isToggled, setToggle] = useState(false)
function handleToggle(){
  setToggle(!isToggled)
}

  return (
    <nav>
      <div className={style.container}>
        <div className={style.nav_con}>
            <div className={style.logo}>
                <a href='#'>JD PORT</a>
            </div>
            <ul>
              <li><a href='#'>Skills</a></li>
              <li><a href='#'>Protfolio</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
            <div className={style.button}><a href='#'>Hire Me</a></div>
        </div>
        {/* Mobile Menu */}
        <FaBars className={style.bars} onClick={handleToggle}/>
        {isToggled ? (
          <>
          <ul className={style.mobile_menu}>
              <li><a href='#'>Skills</a></li>
              <li><a href='#'>Protfolio</a></li>
              <li><a href='#'>Contact</a></li>
            </ul>
            <div className={style.mobile_button}>
              <a href="#">Hire Me</a>
            </div>
          </>
        ) : null}
      </div>
    </nav>
  )
}

export default Navbar
