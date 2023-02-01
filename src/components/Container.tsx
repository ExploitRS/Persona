import * as React from 'react'
import { Link } from 'gatsby'

interface CardProps {
    username: string
    img_src: string
}

const Card: React.FC<CardProps> = (prop) => {
    <div>
        <Link to={`/${prop.username}`} ></Link>
            <div>
                <img src={prop.img_src} alt="" />
            </div>
            <div>username</div>
    </div>
}

export default Card