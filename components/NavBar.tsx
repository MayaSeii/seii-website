'use client';

import { NavLinks } from '@/constants'
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import * as motion from '@/lib/motion';
import Link from 'next/link'
import ThemeButton from './ThemeButton';
import Logo from './Logo';
import MobileMenu from './MobileMenu';

const NavBar = () =>
{
    const [showMenu, setShowMenu] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { resolvedTheme } = useTheme();

    const { scrollY } = useScroll();

    const background = useTransform(
        scrollY,
        [30, 120],
        [resolvedTheme == 'dark' ? '#1c1b22' : resolvedTheme == 'light' ? '#ffffff' : '#ffffff00', resolvedTheme == 'dark' ? '#16161b' : resolvedTheme == 'light' ? '#f5f6f7' : '#ffffff00']
        );

    function updateVisibility()
    {
        if (scrollY?.get() < scrollY?.getPrevious()) { setHidden(false); }
        else if (scrollY?.get() > 100 && scrollY?.get() > scrollY?.getPrevious()) { setHidden(true); }
    }

    useMotionValueEvent(scrollY, "change", () =>
    {
        updateVisibility();
    })

    const variants =
    {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -15 }
    };
    
    return (
        
        <>
            <motion.nav
                className='navbar'
                variants={variants}
                animate={hidden ? "hidden" : "visible"}
                transition={{ ease: 'easeOut', duration: 0.2 }}
                style={{ background }}
            >

                <div className='flex-1 flex-start'>

                    <Link className='header-logo' href='/'>
                        <Logo />
                        <h1 className='font-bold text-2xl'>Seiiccubus</h1>
                    </Link>

                    <div className='flex ml-auto'>

                        <ul className='lg:flex ml-auto hidden gap-1'>
                            
                            {NavLinks.map((link, i) => {

                                return ( i != NavLinks.length - 1 &&
                                    <button className='nav-btn px-3' key={`${link.key}`}>
                                        <Link className='nav-link' href={link.href}>{link.text}</Link>
                                    </button> )

                            })}

                        </ul>

                        <div className='lg:flex hidden'><ThemeButton /></div>
                        
                        <button className='lg:hidden' onClick={() => (setShowMenu(true))}>
                            <HiMenu size={40} className='theme-icon' color='black' />
                        </button>

                    </div>

                </div>

            </motion.nav>

            <MobileMenu showClass={showMenu} closeClick={() => setShowMenu(false)}/>
        </>
        

    )
}

export default NavBar