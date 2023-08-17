import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons, bioIconSize } from '../../utils/font';
import { getImage, IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import Status from './Status';
import { Contact } from './Status/Contacts';
import { SkillProps } from './Status/Skill';

export interface PersonaFullProps {
    username: string,
    alias: string,
    bio: string,
    location?: string,
    org?: string,
    company?: string,
    education?: string,
    avatar: {
        childImageSharp: {
            fluid: IGatsbyImageData,
        }
    },
    contacts?: Contact[],
    skills?: SkillProps[],
}

const PersonaFull: React.FC<PersonaFullProps> = (props: PersonaFullProps) => {
    const p = props
    const avt = getImage(p.avatar.childImageSharp)

    return (
        <>
            <div className='w-full max-w-xl rounded-lg shadow m-auto opacity-80 demo-1'>
                <div className='flex flex-col py-10 content'>
                    <div className='flex flex-row space-x-8 mx-3'>
                        <div className='w-32 h-32 rounded-full glitch'>
                            <GatsbyImage image={avt} className='rounded-full' />
                        </div>
                        <div className=''>
                            <div className='flex flex-row space-x-4'>
                                <h1 className='text-white mb-1 text-3xl font-semibold content__title'>{ p.alias }</h1>
                                <h3 className='text-lg text-gray-200'>{ `@${ p.username }` }</h3>
                            </div>
                            <div>
                                <h2 className='text-white text-lg content__text'>{ p.bio }</h2>
                            </div>
                        </div>
                    </div>
                    <div className='text-white mt-5 w-full px-4 rounded-lg flex flex-col bg-blend-hue backdrop-blur-sm bg-black/75 border border-solid border-glass-card-border '>
                        { p.location && (
                            <div className='flex flex-row py-4 space-x-2 border-b border-glass-card-border'>
                                <div className='p-2 backdrop-blur-sm bg-black/30 rounded-full'>
                                    <FontAwesomeIcon icon={icons['location']} className='' style={ bioIconSize } />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-gray-400 leading-5'>Location</h4>
                                    <h4 className='text-white leading-5'>{ p.location }</h4>
                                </div>
                            </div>
                        )}
                        { p.org && (
                            <h4 className='text-wild-kingdom-text-green'>{ p.org }</h4>
                        )}
                        { p.company && (
                            <h4 className='text-wild-kingdom-text-green'>{ p.company }</h4>
                        )}
                        { p.education && (
                            <div className='flex flex-row space-x-2 py-4'>
                                <div className='p-2 backdrop-blur-sm bg-black/30 rounded-full'>
                                    <FontAwesomeIcon icon={icons['education']} className='' style={ bioIconSize } />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='text-gray-400 leading-5'>Education</h4>
                                    <h4 className='text-white leading-5'>{ p.education }</h4>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            { p.contacts && (
                <Status contacts={ p.contacts } skills={ p.skills } />
            )}
        </>
    )
} 

export default PersonaFull;