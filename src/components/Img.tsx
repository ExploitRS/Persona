import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

export interface ImgProps {
    src: string,
    alt: string,
}

export function Dino(props: ImgProps) {
    const img = props
    return <StaticImage src={img.src} alt={img.alt} />
}