import * as React from 'react'
import { CardProps } from './Card'
import Card from './Card'

const CardList: React.FC<CardListProps> = (props: CardListProps) => {
    const m = props
    return (
        <div>
            { m.members.map((mem, i) => (
                <Card username={mem.username} img_src={mem.img_src} is_public={true} ></Card>
            ))}
        </div>
    )
}

export default CardList

export interface CardListProps {
    members: Array<CardProps>
}