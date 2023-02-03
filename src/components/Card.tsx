import * as React from 'react'
import { Link } from 'gatsby'

const Card: React.FC<CardProps> = (props: CardProps) => {
    const user = props
    return (
        <Link to={`/${user.username}`} >
            <div className='bg-cy-blue-mid max-w-sd mb-4 p-4 border border-cy-blue-light rounded-lg shadow grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 items-center rounded'>
                <div className='flex'>
                    <div className='flex-shrink-0'>
                        <img className='w-10 h-10 rounded-full' src={user.img_src} alt="" />
                    </div>
                    <h4 className='text-cy-blue-light flex-1 min-w-0'>{user.username}</h4>
                </div>
            </div>
        </Link>
    )
}

export default Card;
export interface CardProps {
    username: string
    img_src: string
    is_public: boolean
}