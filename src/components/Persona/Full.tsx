import { getImage, IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { StatusProps } from './Status';
import Status from './Status';

export interface PersonaFullProps {
    username: string,
    alias: string,
    bio: string,
    email: string,
    avatar: {
        childImageSharp: {
            fluid: IGatsbyImageData,
        }
    },
    status?: StatusProps,
}

const PersonaFull: React.FC<PersonaFullProps> = (props: PersonaFullProps) => {
    const p = props
    console.log(p)
    console.log(p.avatar)
    const avt = getImage(p.avatar.childImageSharp)
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setCounter((current) => (current + 1) % aliases.length);
        }, 4000);
        
        return () => clearInterval(timeout);
    })
    const aliases = [ 'Luca Todesco', 'nullstr', 'melon' ];
    let alias = aliases[counter];

    return (
        <>
            <div className='w-full max-w-sm bg-wild-kingdom-front-green rounded-lg shadow m-auto opacity-80 demo-1'>
                <div className='flex flex-col items-center pb-10 content'>
                    <div className='w-24 h-24 mb-3 rounded-full shadow-lg glitch'>
                        <GatsbyImage image={avt} className='glitch_image' />
                    </div>
                    <div className=' justify-center'>
                        <div className='aliases'>
                            <div className='alias'>
                                <h1 className='text-cy-blue-light mb-1 text-xl font-bold content__title'>{alias}</h1>
                            </div>
                        </div>
                    </div>
                    <h3 className='text-cy-blue-light text-lg text-gray-500 pb-4'>{ `@${ p.username }` }</h3>
                    <div>
                        <h3 className='text-cy-blue-light text-lg content__text'>{ p.bio }</h3>
                    </div>
                </div>
            </div>
            { p.status && (
                <Status contacts={ p.status.contacts } skills={ p.status.skills } />
            )}
        </>
    )
} 

export default PersonaFull;