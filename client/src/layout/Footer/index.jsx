import React from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <div className="footer-top">
        <div className="container">
        <div className="links">
        <Link className='link'>Blog</Link>
        <Link className='link'>FAQs</Link>
        <Link className='link'>Contact us</Link>
        </div>
        <div className="icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
        </div>
        </div>
    </div>
    <div className="container footerr">
    ©2018 All Rights Reserverd. This template is made with  by Colorlib
    </div>
    </>
  )
}

export default Footer