import React from 'react';
import Nav from '../components/Nav';
import { Footer } from '../components/Footer';

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <div className='m-0 p-0'>
            <div className='m-0 p-0   bg-black'>
                <Nav title='Persona' />
                <main className="flex-col justify-center p-6 w-full mx-auto max-w-4xl md-my-8">
                    {/* <div className='min-h-screen bg-test'> */}
                        { children }
                    <Footer year='2023' title='Exploit.RS' url=""/>
                </main>
            </div>
        </div>
    )
}