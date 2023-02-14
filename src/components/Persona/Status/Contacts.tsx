
export interface ContactProps {
    email?: Warp,
    telegram?: Warp,
    matrix?: Warp,
    github?: Warp,
    keybase?: Warp,
    twitter?: Warp,
    instagram?: Warp,
}

export interface Warp {
    label: string,
    url: string,
}