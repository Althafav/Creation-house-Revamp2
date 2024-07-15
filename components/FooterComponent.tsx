import Globals from '@/modules/Globals'
import Image from 'next/image'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { CiMail } from 'react-icons/ci'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

export default function FooterComponent() {
  return (
    <div className='footer-wrapper'>
      <div className="container">
        <hr className='mb-5' />

        <div className="row align-items-center">
          <div className="col-lg-3 mb-4 mb-lg-0">
            <Image width={150} height={80} src={`${Globals.BASE_URL}assets/icons/cch-logo.png`} alt="" className='company-logo'  
              loading="lazy" />
          </div>
          <div className="col-lg-3">
            <ul className='d-flex flex-column gap-3 text-secondary'>
              <li className='fs-6'>WHO WE ARE</li>
              <li className='fs-6'>OUR SERVICES</li>
              <li className='fs-6'>PORTFOLIO</li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className='d-flex flex-column gap-3'>
              <li className='fs-3 text-primary'>Contact Us</li>
              <li className='d-flex gap-2 align-items-center text-secondary'>
                <BsTelephone />
                <span>+971564034046</span>
              </li>
              <li className='d-flex gap-2 align-items-center text-secondary'>
                <CiMail />
                <span>info@creation-house.ae</span>
              </li>
            </ul>
          </div>
          <div className="col-lg-3">
            <ul className='d-flex flex-column gap-3'>
              <li className='fs-3 text-primary'>Follow Us</li>
              <li className='d-flex gap-2 text-primary-varient fs-3'><FaInstagram />
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>

        <div className="w-50 mx-auto mt-5">
          <hr />
          <p className='text-white text-center'>© 2024 Creation House</p>
        </div>
      </div>
    </div>
  )
}
