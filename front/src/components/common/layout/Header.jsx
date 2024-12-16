import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../../../assets/img/header/logo.svg";
import Socials from './Socials';
import MobileNav from './MobileNav';


export const NAVLINKS = [
  {href: "/", title: "Home"},
  {href: "/about", title: "About"},
  {href: "/portfolio", title: "Portfolio"},
  {href: "/contact", title: "Contact"},
]

const Header = () => {

  return (
    <header className=' fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* {logo} */}
        <Link to={"/"} className='max-w-[200px]'>
          <img src={Logo} alt="logo" />
        </Link>
        {/* { nav - initially hidden - show on desktop mode } */}
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
          {
            NAVLINKS.map((link, index) => (
              <Link key={index} to={link.href} className='text-[#696c6d] hover:text-primary transition'>
                {link.title}
              </Link>
              )
            )
          }
        </nav>
      </div>
        {/* { socials } */}
        <Socials />
        {/* { mobile nav } */}
        <MobileNav />
    </header>
  )
}

export default Header