import React from "react"

export interface SkillProps {
    languages?: Array<string>,
}

const Skills: React.FC<SkillProps> = (props: SkillProps) => {
    const sk = props;

    return (
        <div className="hidden p-4 bg-white rounded-lg md:p-8 " id="skills" role="tabpanel" aria-labelledby="skills-tab">
            { sk.languages && (
                <>
                    { sk.languages.map((lang) => (
                        <div>{ lang }</div>
                    ))},
                </>
            )}
        </div>
    )
}

export default Skills;