import * as React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'

export interface PersonaAboutProps {
    username: string
    is_public: boolean
    avatar: IGatsbyImageData
}

const PersonaAbout: React.FC<PersonaAboutProps> = (props: PersonaAboutProps) => {
    const prsn = props
    const img = getImage(prsn.avatar)

    return (
        <>
            { prsn.is_public ? (
                <Link to={`/${prsn.username}`} >
                    <div className='bg-wild-kingdom-front-green max-w-sd mb-4 p-4 rounded-lg shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center content-cneter'>
                        <div className='flex'>
                            <div className='flex-shrink-0'>
                                <GatsbyImage image={img} alt={prsn.username} class='rounded-full' />
                            </div>
                            <h4 className='text-cy-blue-light flex-1 min-w-0 mx-4 flex items-center font-bold'>{ `@${prsn.username}` }</h4>
                        </div>
                    </div>
                </Link>
            ) : (
                <div className='bg-wild-kingdom-front-green max-w-sd mb-4 p-4 rounded-lg shadow gap-4 items-center content-cneter'>
                    <div className='flex'>
                        <div className='flex-shrink-0'>
                            {/* <div className='rounded-full w-[50px] h-[50px]'></div> */}
                            <StaticImage src="../../../content/avatars/default.jpg" alt={prsn.username} class='rounded-full w-[50px] h-[50px]' />
                        </div>
                            <h4 className='text-wild-kingdom-icon-red flex-1 min-w-0 mx-4 flex items-center font-bold blur-none'>
                                <i>{ "*Private Persona" }</i>
                            </h4>
                    </div>
                </div>
            )}
        </>

    )
}

export default PersonaAbout;