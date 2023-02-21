import React from 'react';
import Nav from '../components/Nav';
import { Footer } from '../components/Footer';

export const Layout: React.FC<any> = ({ children }) => {
    return (
        <>
            <Nav title='Persona' />
            <main className="bg-gradation-to-r to-wild-kingdom-bg-green-dark from-wild-kingdom-bg-green-light flex flex-col justify-center h-full w-full mx-auto p-8 max-w-4xl md-my-8">
                { children }
                <Footer year='2023' title='Exploit.RS' url=""/>
            </main>
        </>
    )
}