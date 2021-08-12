export interface WorkDataInterface {
    company: string,
    designation: string,
    dateJoinedIn: string,
    dateEnded: string,
    companyLogo: string,
    work: string
}


export const WorkData: Array<WorkDataInterface> = [
    {
        company: 'Freelancer',
        designation: 'Developer',
        dateJoinedIn: '2020',
        dateEnded:  'Present',
        companyLogo: 'https://cdn.dribbble.com/users/958859/screenshots/14342216/media/c323725b7974c6c5c8c045bbeb07a1bc.jpg?compress=1&resize=1600x1200',
        work: "I develop websites, apps to improve the digital performance of small businesses and not-for-profit organisations. I work closely with stakeholders to understand and create solutions for their needs, using a tech stack that is resource sustainable for them.",
    },
    {
        company: 'NSW Department of Education',
        designation: 'Senior Business Analyst',
        dateJoinedIn: '2015',
        dateEnded:  '2018',
        companyLogo: 'https://cdn.dribbble.com/users/17559/screenshots/6664357/figma.png?compress=1&resize=800x600', 
        work: "Proactively built data visualisation tools that aided all NSW school administration staff to better manage their budgets/expenses. These tools allow users to view data in real time, which enables them to make informed decisions on resource allocation.",
    }, 
]