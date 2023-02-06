import * as React from 'react'
import { CardProps } from './About'
import Card from './About'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";

export interface CardListProps {
    members: Array<CardProps>
}

export const AboutList = () => {
    const data = useStaticQuery(graphql`
        {
            allAvatarsYaml {
                nodes {
                    username
                    is_public
                    avatar {
                        childImageSharp {
                            gatsbyImageData(
                                width: 50
                                height: 50
                                placeholder: BLURRED
                                formats: AUTO
                            )
                        }
                    }
                }
            }
        }
    `)
    return (
        <div className='flex flex-col justify-center items-start max-w-2xl mx-auto mb-16'>
            <div className='w-full h-full'>
                { data.allAvatarsYaml.nodes.map((persona: CardProps, i: number) => (
                    <Card username={persona.username} is_public={persona.is_public} avatar={persona.avatar} ></Card>
                ))}
            </div>
        </div>
    )
}