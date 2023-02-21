import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { faTelegram } from '@fortawesome/free-solid-svg-icons';
import { icons } from '../../../utils/font';

// export interface ContactsProps {
//     contacts: Contact[],
// }

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
    console.log('typeof')
    console.log(typeof(cons))
    console.log(cons)

    return(
        <div className="p-4 bg-wild-kingdom-front-green text-wild-kingdom-text-green rounded-lg md:p-8" id="contacts" role="tabpanel" aria-labelledby="contacts-tab">
            <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto sm:grid-cols-3">
                { cons.map((con) => (
                    <a href={con.url} target="_blank">
                        <div className="text-wild-kingdom-text-green-light flex flex-col items-center justify-center">
                            <FontAwesomeIcon className="text-3xl" icon={icons[con.kind]} />
                            <dd className="text-cy-blue-light text-sm leading-5 mt-1">{`${ con.id }`}</dd>
                        </div>
                    </a>
                ))}
            </dl>
        </div>
    )
}

export default Contacts;