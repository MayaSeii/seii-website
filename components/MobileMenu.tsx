import { NavLinks } from '@/constants';
import Link from 'next/link';
import ThemeButton from './ThemeButton';

type Props =
{
    showClass: boolean;
    closeClick: () => any;
}

const MobileMenu = ({ showClass, closeClick }: Props) =>
{
    return (

        <div>

            <div className={`mobile-menu-overlay transition-all duration-200 ${showClass ? 'visible opacity-100' : 'invisible opacity-0'}`}></div>

            <div className={`mobile-menu ${showClass ? 'show-menu' : 'hide-menu'}`}>

                <div className='ml-auto pb-2'><ThemeButton /></div>

                {
                    NavLinks.map((link, i) => (
                    
                        <button tabIndex={-1} key={`${link.key}`} className={`nav-btn px-2d5 ${i == NavLinks.length - 1 && 'mt-auto'}`} onClick={i == NavLinks.length - 1 ? closeClick : undefined}>

                            {
                                i != NavLinks.length - 1 ?

                                <Link className='flex justify-end items-center gap-3 pl-8' href={link.href}>
                                    <span className='nav-link'>{link.text}</span>
                                    <span className='nav-icon'>{link.icon}</span>
                                </Link> :

                                <span className='flex justify-end items-center gap-3 pl-8'>
                                    <span className='nav-link'>{link.text}</span>
                                    <span className='nav-icon'>{link.icon}</span>
                                </span>
                            }

                        </button>

                    ))
                }

            </div>

        </div>

    )
}

export default MobileMenu;