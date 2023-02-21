import * as React from 'react'
import { PersonaAboutProps } from './About'
import PersonaAbout from './About'

export interface PersonaAboutListProps {
    personas: Array<PersonaAboutProps>,
}

const PersonaAboutList: React.FC<PersonaAboutListProps> = (props) => {
    const personas = props.personas
    return (
        <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
            <div className='w-full h-full'>
                { personas.map((persona: PersonaAboutProps) => (
                    <PersonaAbout username={persona.username} is_public={persona.is_public} avatar={persona.avatar} />
                ))}
            </div>
        </div>
    )
}

export default PersonaAboutList;