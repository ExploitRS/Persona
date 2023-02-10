import { getImage, IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';

export interface PersonaFullProps {
    username: string,
    alias: string,
    status: string,
    email: string,
    avatar: IGatsbyImageData,
}

const PersonaFull: React.FC<PersonaFullProps> = (props: PersonaFullProps) => {
    const p = props
    console.log(p)
    const avt = getImage(p.avatar)

    return (
        <div>
            <div>
                <div>
                    <GatsbyImage image={ avt } />
                </div>
                <div>
                    <h1>{ p.alias }</h1>
                    <h3 className='text-cy-blue-light'>{ p.username }</h3>
                </div>
                <div>
                    <h3>{ p.email }</h3>
                </div>
            </div>
        </div>
    )
} 

export default PersonaFull;