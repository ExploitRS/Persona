import React from "react";
import Skill, { SkillProps } from "./Skill";

export interface SkillsProps {
    skills: SkillProps[],
}

const Skills: React.FC<SkillsProps> = (props: SkillsProps) => {
    const sk_list = props.skills;
    return (
        <div className="my-9">
            <h1 className="text-white font-bold text-2xl md:text-4xl tracking-tight">Skills</h1>
            <div className="flex flex-col flex-nowrap flex-shrink-0 flex-grow-0 basis-full" id="skills">
                { sk_list.map((sk) => (
                    <Skill { ...sk } />
                ))}
            </div>
        </div>
    )
}

export default Skills;