import React from "react"
import { ContactProps } from "./Contacts";
import { SkillProps } from "./Skills";
import Contacts from "./Contacts";
import Skills from "./Skills";

export interface StatusProps {
    contacts?: ContactProps,
    skills?: SkillProps,
}

const Status: React.FC<StatusProps> = (props: StatusProps) => {
    const contacts = props.contacts;
    const skills = props.skills;

    return(
        <div className="w-full bg-cy-blue-mid rounded-lg shadow mt-10">
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">Select tab</label>
                <select name="" id="tabs" className="border-b text-cy-blue-light text-sm rounded-t-lg focus:cy-red-light block w-full p-2.5">
                    { contacts && (
                        <option>Contacts</option>
                    )}
                    { skills && (
                        <option>Skills</option>
                    )}
                </select>
            </div>
            <ul className="hidden text-sm font-medium text-center divide-x divide-cy-blue-light rounded-lg sm:flex" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
                { contacts && (
                    <li className="w-full">
                        <button id="contacts-tab" data-tabs-target="#contacts" type="button" role="tab" aria-controls="contacts" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-cy-blue-mid focus:outline-none">
                            Contacts
                        </button>
                    </li>
                )}
                { skills && (
                    <li className="w-full">
                        <button id="skills-tab" data-tabs-target="#skills" type="button" role="tab" aria-controls="skills" aria-selected="false" className="inline-block w-full p-4 bg-cy-blue-mid hover:bg-cy-blue-mid focus:outline-none">
                            Skills
                        </button>
                   </li>
                )}
            </ul>
            <div id="fullWidthTabContent" className="border-t border-gray-200">
                { contacts && (
                    <Contacts { ...contacts } />
                )}
                { skills && (
                    <Skills { ...skills } />
                )}
            </div>
        </div>
    )
};

export default Status;