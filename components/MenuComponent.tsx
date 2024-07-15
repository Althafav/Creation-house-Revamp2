
import Globals from '@/modules/Globals';
import Image from 'next/image';
import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi";
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { IoMdClose } from 'react-icons/io';



export default function MenuComponent() {
  const [isToggle, setIsToggle] = useState(false)

  const handleToggle = () => {
    setIsToggle(prevState => !prevState)
  }
  return (
    <nav className='menu-wrapper'>
      <div className="container d-flex align-items-center justify-content-between">
        <div className="logo-wrapper">
          <Image width={120} height={54} src={`${Globals.BASE_URL}assets/icons/cch-logo-no-name.png`} alt="" 
            loading="lazy" />
        </div>

        <ul className='menu-items'>
          <li className='menu-item'>WHO WE ARE</li>
          <li className='menu-item'>OUR SERVICES</li>
          <li className='menu-item'>PORTFOLIO</li>

          <div className='menu-cta-wrapper'>
            <button className='menu-cta-btn'><span>MAKE AN INQUIRY</span></button>
          </div>
        </ul>

        <div className="menu-icon-wrapper d-lg-none d-block" onClick={handleToggle}>
          {isToggle ? <IoMdClose size={32} color='white' cursor="pointer" /> : <HiOutlineMenuAlt2 size={32} color='white' cursor="pointer" />}

        </div>

      </div>


      <div className={`mobile-menu-nav  d-lg-none d-block ${isToggle ? 'd-block' : 'd-none'}`}>

        <ul className='mobile-menu-items'>
          <li className='mobile-menu-item'>WHO WE ARE</li>
          <li className='mobile-menu-item'>OUR SERVICES</li>
          <li className='mobile-menu-item'>PORTFOLIO</li>

          <li className='menu-cta-wrapper'>
            <button className='mobile-menu-cta-btn'><span>MAKE AN INQUIRY</span></button>
          </li>

        </ul>

      </div>
    </nav>
  )
}
