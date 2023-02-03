import * as React from 'react'
import { CardProps } from './Card'
import Card from './Card'

const CardList: React.FC<CardListProps> = (props: CardListProps) => {
    const m = props
    return (
        <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
            <div className='w-full h-full'>
                { m.members.map((mem, i) => (
                    <Card username={mem.username} img_src={mem.img_src} is_public={true} ></Card>
                ))}
            </div>
        </div>
    )
}

export default CardList

export interface CardListProps {
    members: Array<CardProps>
}