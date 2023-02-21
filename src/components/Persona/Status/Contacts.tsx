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
            { cons.map((con) => (
                <div className="text-wild-kingdom-text-green-light">
                    <FontAwesomeIcon icon={icons[con.kind]} />
                    {/* <div className="text-cy-blue-light">{ con.telegram.label }</div>
                    <div>{ con.telegram.url }</div> */}
                </div>
            ))}
        </div>
    )
}

export default Contacts;