import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTelegram } from '@fortawesome/free-solid-svg-icons';
import { icons, contactIconSize, SimpleIcon } from '../../../utils/font';
export interface ContactsProps {
    contacts: Contact[];
}

export type AccountKind =
    | 'email'
    | 'telegram'
    | 'xmpp'
    | 'keybase'
    | 'matrix'
    | 'github'
    | 'notabug'
    | 'gitlab'
    | 'virustotal'
    | 'discord'
    | 'twitter'
    | 'instagram'
    | 'youtube';

export interface Contact {
    kind: AccountKind,
    label: string,
    id: string,
    url?: string,
    quickly?: string,
}

export interface Warp {
    label: string,
    url: string,
}

const Icon = {
    ["email"]: <SimpleIcon name="protonmail" />,
    ["xmpp"]: <SimpleIcon name="xmpp" />,
    ["notabug"]: <SimpleIcon name="git" />,
    ["telegram"]: <FontAwesomeIcon className="text-3xl" icon={icons['telegram']} style={ contactIconSize } />,
    ["github"]: <FontAwesomeIcon className="text-3xl" icon={icons['github']} style={ contactIconSize } />,
}

const Contacts: React.FC<ContactsProps> = (props) => {
    const { contacts: cons } = props;

    return(
        <>
            <h1 className="text-white font-bold text-2xl md:text-4xl tracking-tight">Social Accounts & Contacts</h1>
            <div className="pt-4 text-white">
                <div className="flex max-w-screen-xl flex-wrap mx-auto ">
                    { cons.map((con) => (
                        <a href={con.url} target="_blank" className="flex-grow-0 flex-shrink-0 basis-1/2 mb-2">
                            <div className="text-white flex flex-row space-x-2 justify-start items-center">
                                {/* <FontAwesomeIcon className="text-3xl" icon={icons[con.kind]} style={ contactIconSize } /> */}
                                { Icon[con.kind] }
                                <div>
                                    <h3 className="text-white text-md font-bold">{ con.label }</h3>
                                    <h4 className="text-gray-400 text-sm font-semibold font-mono">{`${ con.id }`}</h4>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Contacts;