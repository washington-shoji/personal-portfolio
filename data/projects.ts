export interface ProjectData {
        id: number,
        title: string,
        about: string,
        tags: Array<string>,
        demo: string,
        github: string,
        image: string,
}

export const ProjectData: Array<ProjectData> = [
    {
        id: 1,
        title: 'Personal Portfolio',
        about: 'This project is built with Typescript using Next front-end framework and Firebase as backend cloud storage. Its primary purpose is to showcase my other projects on the projects page.',
        tags: ['TypeScript', 'Next.js', 'Firebase'],
        demo: 'https://github.com/',
        github: 'https://github.com/',
        image: 'https://cdn.dribbble.com/users/2564256/screenshots/14708155/media/6c2a1463d6ec36fbcd24414495a1fc97.png',

    },
    {
        id: 2,
        title: 'Personal Portfolio',
        about: 'This project is built with Typescript using Next front-end framework and Firebase as backend cloud storage. Its primary purpose is to showcase my other projects on the projects page.',
        tags: ['TypeScript', 'Next.js', 'Firebase'],
        demo: 'https://github.com/',
        github: 'https://github.com/',
        image: 'https://cdn.dribbble.com/users/2564256/screenshots/14708155/media/6c2a1463d6ec36fbcd24414495a1fc97.png',

    },
]