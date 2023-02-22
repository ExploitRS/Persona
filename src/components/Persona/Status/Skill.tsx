import React from "react"
import { devicon } from '../../../utils/font';

export type SkillProps = Sk & (Programming | Security);

export interface Sk {
    kind: SkillKind,
    description?: string,
    level?: number,
}

interface Programming {
    languageKind: string,
    label: string,
}

interface Security {
    approach: string,
    label: string,
}

enum SkillKind {
    Programming = 'programming',
    Security = 'security',
}

const Badge ={
    [SkillKind.Programming]: <div>Programming</div>,
    [SkillKind.Security]: <div>Security</div>,
};

const Skill: React.FC<SkillProps> = (props: SkillProps) => {
    const sk = props;

    const badge = (
        Badge[sk.kind]
    )
    const icon = (
        devicon['rust']
    )

    return (
        <>
            <h3 className="text-cy-blue-light border-b gradient-border">{ sk.label }</h3>
            { sk.description && (
                <p className="text-cy-blue-light">{ sk.description }</p>
            )}
            {/* { badge } */}
            {/* <div className="text-wild-kingdom-text-green">
                { icon }
            </div> */}
        </>
    )
}

export default Skill;