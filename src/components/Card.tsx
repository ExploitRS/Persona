import * as React from 'react'
import { Link } from 'gatsby'

interface CardProps {
    username: string
    img_src: string
}

const Card: React.FC<CardProps> = (username, img_src) => {
    return (
        <div>
            <Link to={`/${username}`} ></Link>
                <div>
                    <img src={img_src} alt="" />
                </div>
                <div>username</div>
        </div>
    )
}

export default Card