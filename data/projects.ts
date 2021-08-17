export interface Project {
    id: number;
    title: string;
    description: string;
    image: string

}

export const projectData: Array<Project> = [
    {
    id: 1,
    title: 'Project 1',
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old.`,
    image: '/temp.jpg'
    },
    {
    id: 2,
    title: 'Project 2',
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old.`,
    image: '/temp.jpg'
    },
    {
    id: 3,
    title: 'Project 3',
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text.
    It has roots in a piece of classical Latin literature from 45 BC,
    making it over 2000 years old.`,
    image: '/temp.jpg'
    },
]