'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { HiSun, HiMoon } from 'react-icons/hi';
import { PiCircleDashed } from 'react-icons/pi';

const ThemeButton = () =>
{
    const { resolvedTheme, setTheme } = useTheme();
    const [ mounted, setMounted ] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return ( <PiCircleDashed className='theme-icon' size={40} /> )

    return (

        <button onClick={() => resolvedTheme === 'dark' ? setTheme('light') : setTheme('dark') }>
            

                    {resolvedTheme === 'light' ? 
                <HiMoon id='moon-icon' className='theme-icon' size={40} /> :
                <HiSun id='sun-icon' className='theme-icon' size={40} />}

                

        </button>

    )
}

export default ThemeButton