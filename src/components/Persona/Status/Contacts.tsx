import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTelegram } from '@fortawesome/free-solid-svg-icons';
import { icons, contactIconSize } from '../../../utils/font';
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
const Contacts: React.FC<ContactsProps> = (props) => {
    const { contacts: cons } = props;

    return(
        <>
            <h1 className="text-white font-bold text-2xl md:text-4xl tracking-tight">Social Accounts & Contacts</h1>
            <div className="pt-4 text-white" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
                <dl className="grid max-w-screen-xl grid-cols-2 gap-8 mx-auto ">
                    { cons.map((con) => (
                        <a href={con.url} target="_blank">
                            <div className="text-white flex flex-row space-x-2 items-stretch justify-start">
                                <FontAwesomeIcon className="text-3xl" icon={icons[con.kind]} style={ contactIconSize } />
                                <div>
                                    <h3 className="text-white text-lg font-bold">{ con.label }</h3>
                                    <h4 className="text-gray-400 text-md leading-5 mt-1">{`${ con.id }`}</h4>
                                </div>
                            </div>
                        </a>
                    ))}
                </dl>
            </div>
        </>
    )
}

export default Contacts;