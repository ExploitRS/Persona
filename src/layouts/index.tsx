import React from 'react';
import Nav from '../components/Nav';
import { Footer } from '../components/Footer';

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className='m-0 p-0 wallpaper'>
            <div className='m-0 p-0  backdrop-blur-ios bg-black/[.2]'>
                <Nav title='Persona' />
                <main className="flex-col justify-center w-full mx-auto p-8 max-w-4xl md-my-8">
                    <div className='min-h-screen '>
                    {/* <div className='min-h-screen bg-test'> */}
                        { children }
                    </div>
                    <Footer year='2023' title='Exploit.RS' url=""/>
                </main>
            </div>
        </div>
    )
}