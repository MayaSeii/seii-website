"use client";

import { NavLinks } from "@/constants"
import { HiMenu } from 'react-icons/hi'
import { IconContext } from "react-icons";
import Link from "next/link"
import ThemeButton from "./ThemeButton";
import Logo from "./Logo";

const NavBar = () =>
{
    return (
        
        <nav className="flex-between navbar">

            <div className="flex-1 flex-start">

                <Link className="header-logo flex-start gap-3" href='/'>
                    <Logo />
                    <h1 className='font-bold text-2xl'>Seiiccubus</h1>
                </Link>

                <div className='flex ml-auto lg:gap-5'>

                    <ul className="lg:flex ml-auto hidden gap-1">
                        
                        {NavLinks.map((link) => (

                            <button className='nav-btn'>
                                <Link className='nav-link' href={link.href} key={link.key}>{link.text}</Link>
                            </button>  

                        ))}

                    </ul>

                    <ThemeButton />
                    
                    <button className="lg:hidden">
                        <HiMenu size={40} className='theme-icon' color='black' />
                    </button>

                </div>
            </div>
        </nav>

    )
}

export default NavBar