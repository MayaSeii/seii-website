import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaGithub, FaYoutube, FaDiscord } from 'react-icons/fa6';
import { MdPrivacyTip } from 'react-icons/md';

const Footer = () =>
{
  return (

    <div className='flex w-100 align-middle dark:bg-black bg-gray-400 dark:bg-opacity-10 bg-opacity-10 px-5 py-4 text-xs text-gray-800 dark:text-gray-300 mt-auto'>
      
      <p className='m-0'>© 2023 <strong>Maya Oliveira</strong></p>
      <span className='mx-2 opacity-50'>|</span>
      <Link className='footer-link' href='/privacy'><MdPrivacyTip /> <span>Privacy Policy</span></Link>

      <div className='xs:flex xs:flex-center hidden md:gap-5 gap-2 ml-auto'>

        <Link className='footer-link' rel='noopener noreferrer' target='_blank' href='https://bit.ly/maya-github'><FaGithub size={14} /> <span className='md:block hidden'>GitHub</span></Link>
        <Link className='footer-link' rel='noopener noreferrer' target='_blank' href='https://bit.ly/maya-twt'><FaTwitter size={14} /> <span className='md:block hidden'>Twitter</span></Link>
        <Link className='footer-link' rel='noopener noreferrer' target='_blank' href='https://bit.ly/maya-utube'><FaYoutube size={14} /> <span className='md:block hidden'>YouTube</span></Link>
        <Link className='footer-link' rel='noopener noreferrer' target='_blank' href='https://bit.ly/maya-discord'><FaDiscord size={14} /> <span className='md:block hidden'>Discord</span></Link>

      </div>

    </div>

  )
}

export default Footer;