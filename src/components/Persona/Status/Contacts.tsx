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
    quickly?: boolean,
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
    ["discord"]: <FontAwesomeIcon className="text-3xl" icon={icons['discord']} style={ contactIconSize } />,
}

const Contacts: React.FC<ContactsProps> = (props) => {
    const { contacts: cons } = props;

    return(
        <>
            <div className="my-3">
                <h1 className="text-white font-bold text-2xl md:text-4xl leading-6 tracking-tight py-2">Social Accounts & Contacts</h1>
                <h2 className="text-gray-400 text-lg md:text-xl">I may respond quickly on the accounts having "star".</h2>
            </div>
            <div className="text-white">
                <div className="flex max-w-screen-xl flex-wrap mx-auto">
                    { cons.map((con) => (
                        <a href={con.url} target="_blank" className="flex-grow-0 flex-shrink-0 basis-1/2 mb-2">
                            <div className="text-white flex flex-row space-x-2 justify-start items-center">
                                {/* <FontAwesomeIcon className="text-3xl" icon={icons[con.kind]} style={ contactIconSize } /> */}
                                { Icon[con.kind] }
                                <div>
                                    <div className="flex flex-row space-x-1">
                                        <h3 className="text-white text-md font-bold">{ con.label }</h3>
                                        { con.quickly ? <span className="m-0 p-0 content-center justify-center items-center">
                                            <FontAwesomeIcon icon={ icons['star'] } className="p-0 w-4 h-4"/>
                                        </span> : <></> }
                                    </div>
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