import React, { ReactComponentElement, useState } from "react"
import { Contact, ContactsProps } from "./Contacts";
import { SkillProps } from "./Skill";
import Contacts from "./Contacts";
import Skills from "./SkillList";

export interface StatusProps {
    contacts?: Contact[],
    skills?: SkillProps[],
}
interface TabProps {
    title: string,
}

const Status: React.FC<StatusProps> = ({ contacts, skills }) => {
    const initTabs = (st: StatusProps) => {
        let tabs: TabProps[] = [];
        { st.contacts && (
            tabs.push({ title: 'Contacts' })
        )}
        { st.skills && (
            tabs.push({ title: 'Skills' })
        )}
        return tabs
    }
    const tabs = initTabs({ contacts, skills })
    const [active, setActive] = useState<string>(tabs[0].title);

    const cons = {
        contacts: contacts,
    }

    const sks = {
        skills: skills,
    }

    return(
        <>
            <div className="w-full bg-wild-kingdom-front-green rounded-lg shadow mt-10 opacity-80 m-auto max-w-xl">
                <ul className="flex divide-x text-sm font-medium text-center text-wild-kingdom-text-green rounded-t-lg" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                    { tabs.map((tab) => (
                        <li className="w-full">
                            <button
                                type="button"
                                key={ tab.title }
                                active={ active === tab.title}
                                onClick={() => setActive(tab.title)}
                                className="inline-block p-4 text-wild-kingdom-text-green rounded-tl-lg hover:opacity-30">
                                    { tab.title }
                            </button>
                        </li>
                    ))}
                </ul>
                <div id="defaultTabContent" className="border-t-2 gradient-border px-2">
                    {  active === 'Contacts' && (
                        <Contacts { ...cons } />
                    )}
                    {  active === 'Skills' && (
                        <Skills { ...sks } />
                    )}
                </div>
            </div>
        </>
    )
};

export default Status;