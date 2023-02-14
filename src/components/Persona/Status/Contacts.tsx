import React from "react"

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

const Contacts: React.FC<ContactProps> = (props: ContactProps) => {
    const con = props;

    return(
        <div className="hidden p-4 bg-white rounded-lg md:p-8 " id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            { con.telegram && (
                <>
                    <div>{ con.telegram.label }</div>
                    <div>{ con.telegram.url }</div>
                </>
            )}
        </div>
    )
}

export default Contacts;