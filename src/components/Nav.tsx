import * as React from 'react';
import { Link } from 'gatsby';

const Nav = (props: NavProps) => {
    const title = props.title;
    return (
        <nav className='bg-transparent backdrop-blur sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto opacity-80 top-0 sticky z-50'>
            <div className='container flex flex-wrap items-center justify-between mx-auto'>
                <Link to="/" className='flex items-center'>
                    {/* <img src="logo.svg" className='h-6 mr-3 sm:h-10' alt="logo of Exploit.RS" /> */}

                    <span className='self-center text-xl text-wild-kingdom-text-green font-bold whitespace-nowrap'>{title}</span>
                </Link>
            </div>
        </nav>
    )
} 

export default Nav

export interface NavProps {
    title: string;
}