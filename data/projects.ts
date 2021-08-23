export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    demoUrl: string;
    githubUrl: string;

}

export const projectData: Array<Project> = [
    {
    id: 1,
    title: 'M.E.R.N app',
    description: `A Mongo, Express, React, Node (MERN) stack Web app that creates and manages events, it is developed using JS and Redux for state management.`,
    image: '/evenx.png',
    demoUrl: 'https://eventx-mern.herokuapp.com/',
    githubUrl: 'https://github.com/washington-shoji/eventx'
    },
    {
    id: 2,
    title: 'Next.js App',
    description: `This very own live web app portfolio. This app is built with Next.js, TypeScript, HTML, CSS and, fully deployed in Firebase.`,
    image: '/portfolio.png',
    demoUrl: 'https://washingtonshoji.live/',
    githubUrl: 'https://github.com/washington-shoji/personal-portfolio'
    },
    {
    id: 3,
    title: 'Flutter App',
    description: `A Flutter food recipes app where users can use its features as a shopping list. The app handles Create, Update, Delete (CRUD) operations.`,
    image: '/recipe.png',
    demoUrl: 'https://washingtonshoji.live/',
    githubUrl: 'https://github.com/washington-shoji/flutter_food_app_recipe'
    },
]