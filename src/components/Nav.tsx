import * as React from 'react';
import { Link } from 'gatsby';

const Nav = (props: NavProps) => {
    const title = props.title;
    return (
        <nav className='backdrop-blur-ios flex justify-between items-center p-8 mx-0 my-0  top-0 sticky z-50'>
            <div className='container flex flex-wrap items-center justify-between md:mx-auto lg:mx-auto w-screen'>
                <Link to="/" className='flex items-center'>
                    {/* <img src="logo.svg" className='h-6 mr-3 sm:h-10' alt="logo of Exploit.RS" /> */}

                    <span className='self-center text-xl text-white font-bold whitespace-nowrap'>{title}</span>
                </Link>
            </div>
        </nav>
    )
} 

export default Nav

export interface NavProps {
    title: string;
}