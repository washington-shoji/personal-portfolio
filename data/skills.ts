import {faFire} from '@fortawesome/free-solid-svg-icons'; // import the icons you need
import {
    faHtml5,
    faCss3Alt,
	faReact,
    faNeos,
    faNode,
    faJs,
    faYarn,
    faGit,
    faGithubAlt,
    IconDefinition
} from '@fortawesome/free-brands-svg-icons'; // import the icons you need

export interface SkillItemType {
    name: string,
    icon: IconDefinition,
}
export interface SkillDataType {
    type: string,
    list: Array<SkillItemType>,
}

export const SkillData: Array<SkillDataType> = [
   {
    type: 'Frontend',
    list: [
        {
            name: 'HTML',
            icon: faHtml5,
        },
        {
            name: 'CSS',
            icon: faCss3Alt,
        },
        {
            name: 'React',
            icon: faReact,
        },
        {
            name: 'Next.js',
            icon: faNeos,
        },
        {
            name: 'JavaScript',
            icon: faJs,
        },
    ],
   },
   {
    type: 'Backend',
    list: [
        {
            name: 'Node',
            icon: faNode,
        },
        {
            name: 'Yarn',
            icon: faYarn,
        },
        {
            name: 'Firebase',
            icon: faFire,
        },
        {
            name: 'Git',
            icon: faGit,
        },
        {
            name: 'Github',
            icon: faGithubAlt,
        },
    ],
   }  
]