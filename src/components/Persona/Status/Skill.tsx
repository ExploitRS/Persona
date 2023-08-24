import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SimpleIcon, simpleicon, skillIcons } from '../../../utils/font';

export type SkillProps = Sk & (Programming | Security);

export interface Sk {
    kind: SkillKind,
    description?: string,
    level?: number,
    languageKind?: string,
    approach?: string,
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

const brandColors = {
    rust: 'to-language-rust-normal/30',
    nim: 'to-language-nim-normal/30',
    elm: 'to-language-elm-normal/30',
    go: 'to-language-go-normal/30',
    typescript: 'to-language-typescript-normal/30',
    pentest: 'to-brand-hackerone/30',
    re: 'to-brand-malware/30',
}

const Badge = {
    [SkillKind.Programming]: <div>Programming</div>,
    [SkillKind.Security]: <div>Security</div>,
};

const Icon = {
    ["rust"]: <FontAwesomeIcon icon={skillIcons["rust"]} className="w-24 h-24"/>,
    ["nim"]: <SimpleIcon name="nim" className="w-24 h-24" />,
    ["go"]: <FontAwesomeIcon icon={skillIcons["go"]} className="w-24 h-24"/>,
    ["elm"]: <SimpleIcon name="elm" className="w-24 h-24" />,
    ["typescript"]: <SimpleIcon name="typescript" className="w-24 h-24" />,
    ["pentest"]: <SimpleIcon name="pentest" className="w-24 h-24" />,
    ["re"]: <SimpleIcon name="virustotal" className="w-24 h-24" />,
}

const Skill: React.FC<SkillProps> = (props: SkillProps) => {
    const sk = props;

    const tag = (
        Badge[sk.kind]
    )

    const icon = props.kind === SkillKind.Programming ? (
        Icon[sk.languageKind]
    ) : (
        Icon[sk.approach]
    )

    const languageColor = props.kind === SkillKind.Programming ? (
        brandColors[sk.languageKind]
    ) : (
        brandColors[sk.approach]
    )

    return (
        <div className={ `flex flex-nowrap w-full mb-3 backdrop-blur-ios bg-gradient-to-br from-transparent ${languageColor} rounded-lg` }>
            <div className="flex   justify-between  w-full p-8 backdrop-blur-ios bg-black/[.2] rounded-lg text-white border border-solid border-glass-card-border">
                <div>
                    <div className="">
                        <h3 className="text-white font-bold text-2xl mb-2 tracking-tight w-full">{ sk.label }</h3>
                    </div>
                    {/* { sk.description && (
                        <p className="text-cy-blue-light leading-5">{ sk.description }</p>
                    )} */}
                    { sk.kind && (
                        <div className="text-white">{ tag }</div>
                    )}
                </div>
                <div className="text-white opacity-20 justify-items-end items-end place-content-end place-items-end right-0 flex">
                    { icon }
                </div>
            </div>
        </div>
    )
}

export default Skill;