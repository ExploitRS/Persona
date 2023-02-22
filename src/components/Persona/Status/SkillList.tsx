import React from "react";
import Skill, { SkillProps } from "./Skill";

export interface SkillsProps {
    skills: SkillProps[],
}

const Skills: React.FC<SkillsProps> = (props: SkillsProps) => {
    const sk_list = props.skills;
    console.log('skill list')
    console.log('skill list')
    console.log(sk_list)
    return (
        <div className="p-4 bg-white rounded-lg md:p-8 bg-wild-kingdom-front-green" id="skills" role="tabpanel" aria-labelledby="skills-tab">
            { sk_list.map((sk) => (
                <Skill { ...sk } />
            ))}
        </div>
    )
}

export default Skills;