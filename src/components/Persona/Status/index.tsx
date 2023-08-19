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
    const cons = {
        contacts: contacts,
    }

    const sks = {
        skills: skills,
    }

    return(
        <>
            <div className="w-full rounded-lg shadow mt-10 opacity-80 m-auto max-w-xl">
                <div id="defaultTabContent" className="">
                    {  contacts && (
                        <Contacts { ...cons } />
                    )}
                    {  skills && (
                        <Skills { ...sks } />
                    )}
                </div>
            </div>
        </>
    )
};

export default Status;