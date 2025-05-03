import midnightDinerImage from './assets/img/midnight-diner.png';
import theInternationalArticlesImage from './assets/img/the-international-articles.png';

const projects = [
    {
        id: 1,
        title: 'Midnight Diner',
        description: 'This full-stack MERN application allows you to explore a delightful culinary experience.',
        image: midnightDinerImage,
        tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Docker', 'Redis', 'JWT', 'Nginx'],
        liveDemo: 'https://github.com/MarshallNickolauson/midnight-diner',
        github: 'https://github.com/MarshallNickolauson/midnight-diner',
        featured: true,
        type: 'Fullstack',
    },
    {
        id: 2,
        title: 'The International Articles',
        description: 'This full-stack application allows you to view articles in multiple languages simultaneously, as well as write your own articles and use AI to generate translations.',
        image: theInternationalArticlesImage,
        tags: ['React', 'Docker', 'Redis', 'Node.js', 'Express', 'MongoDB', 'Flask', 'Python', 'JWT', 'Nginx'],
        liveDemo: 'https://github.com/MarshallNickolauson/the-international-articles',
        github: 'https://github.com/MarshallNickolauson/the-international-articles',
        featured: true,
        type: 'Fullstack',
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'A brief project description of this project and the technologies used to build it.',
        image: 'https://picsum.photos/seed/picsum/600/400',
        tags: ['React', 'JavaScript', 'CSS'],
        liveDemo: '#',
        github: '#',
        featured: true,
        type: 'Frontend',
    },
];

export default projects;
