import React from 'react'
import Link from 'next/link'
import {AiFillInstagram, AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright ⓒ 2023.Ram Book Store.All rights reserved</p>
      <p className="icons">
        <Link href="https://www.linkedin.com/in/ram-mohan-patel-1b5597220/">
        <AiFillLinkedin/>
        </Link>
        <AiOutlineTwitter/>
        <AiFillInstagram/>      
      </p>
    </div>
  )
}

export default Footer
