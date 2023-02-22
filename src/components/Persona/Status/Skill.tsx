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
        <div className="mb-3">
            <div className="flex w-full">
                <h3 className="text-cy-blue-light border-b gradient-border font-bold text-lg mb-2 tracking-tight w-full">{ sk.label }</h3>
            </div>
            { sk.description && (
                <p className="text-cy-blue-light leading-5">{ sk.description }</p>
            )}
        </div>
    )
}

export default Skill;