import React from 'react';
import Nav from '../components/Nav';
import { Footer } from '../components/Footer';

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <>
            <Nav title='Persona' />
            <main className="bg-gradation-to-r to-wild-kingdom-bg-green-dark from-wild-kingdom-bg-green-light h-full w-full mx-none px-8">
                { children }
                <Footer year='2023' title='Exploit.RS' url=""/>
            </main>
        </>
    )
}