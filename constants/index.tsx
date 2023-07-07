import { HiAtSymbol, HiHeart, HiHome, HiPlay, HiX } from 'react-icons/hi';
import { HiCodeBracketSquare } from 'react-icons/hi2';

export const NavLinks =
[
    { href: '/', key: 'Home', text: 'Home', icon: <HiHome size={23}  /> },
    { href: '/', key: 'Software', text: 'Software', icon: <HiCodeBracketSquare size={23} /> },
    { href: '/', key: 'Music', text: 'Music', icon: <HiPlay size={23} /> },
    { href: '/', key: 'About Me', text: 'About Me', icon: <HiHeart size={23} /> },
    { href: '/', key: 'Contact', text: 'Contact', icon: <HiAtSymbol size={23} /> },
    { href: '/', key: 'Close', text: 'Close', icon: <HiX size={23} /> },
]