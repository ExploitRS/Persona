import * as React from 'react';
import { Link } from 'gatsby';

const Nav = (props: NavProps) => {
    const title = props.title;
    return (
        <nav className='bg-transparent backdrop-blur sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto opacity-80 top-0 sticky z-50'>
            <div className='container flex flex-wrap items-center justify-between mx-auto'>
                <Link to="#" className='flex items-center'>
                    {/* <img src="logo.svg" className='h-6 mr-3 sm:h-10' alt="logo of Exploit.RS" /> */}

                    <span className='self-center text-xl text-wild-kingdom-text-green font-bold whitespace-nowrap'>{title}</span>
                </Link>
                <button data-collapse-toggle="navbar-dropdown" type="button" className='inline-flex items-center p-2 ml-3 text-sm text-cy-blue-light rouded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200' aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className='sr-only'>Open main menu</span>
                    <svg className='w-6 h-6' aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenadd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
        </nav>
    )
} 

export default Nav

export interface NavProps {
    title: string;
}