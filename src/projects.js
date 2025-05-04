import midnightDinerImage from './assets/img/midnight-diner.png';
import theInternationalArticlesImage from './assets/img/the-international-articles.png';
import mernBuilderScriptImage from './assets/img/mern-builder-script.png';
import expressBookReviews from './assets/img/express-book-reviews.png';
import jsFinalProject from './assets/img/js-final-project.png';
import apolloniaDental from './assets/img/apollonia-dental.png';
import proshop from './assets/img/proshop.png';
import mernAuthApp from './assets/img/mern-auth-app.png';
import goalsApp from './assets/img/goals-app.png';
import spacecraft from './assets/img/spacecraft.png';
import littleLemon from './assets/img/little-lemon.png';
import djangoApi from './assets/img/django-api.png';

const projects = [
    {
        id: 1,
        title: 'Midnight Diner',
        description: "A full-stack MERN experience where users can explore a fictional late-night food joint. From user auth to real-time updates and containerized deployment, it's more than just a menu app — it's a tech-heavy meal.",
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
        description: "This cross-language publishing platform lets users view and write articles in multiple languages at once. Includes AI-powered translations, robust backend services, and a clean interface — ideal for global-minded writers and tinkerers.",
        image: theInternationalArticlesImage,
        tags: ['React', 'Docker', 'Redis', 'Node.js', 'Express', 'MongoDB', 'Flask', 'Python', 'JWT', 'Nginx'],
        liveDemo: 'https://github.com/MarshallNickolauson/the-international-articles',
        github: 'https://github.com/MarshallNickolauson/the-international-articles',
        featured: true,
        type: 'Fullstack',
    },
    {
        id: 3,
        title: 'MERN Builder Script',
        description: "A command-line tool that automates the setup of a full MERN stack project. Generates boilerplate code, enforces file structure, adds Redux, linters, .env configs, and more. Ideal for devs who want to skip the setup grind.",
        image: mernBuilderScriptImage,
        tags: ['Python', 'Automation', 'CLI Tool', 'Node.js', 'Express', 'MongoDB', 'React', 'Redux', 'Boilerplate Generator', 'Dev Environment', 'Scaffolding'],
        liveDemo: 'https://github.com/MarshallNickolauson/mern-builder-script',
        github: 'https://github.com/MarshallNickolauson/mern-builder-script',
        featured: true,
        type: 'Backend',
    },
    {
        id: 4,
        title: 'Express Book Reviews (IBM)',
        description: "A no-frills, all-Express-and-Node affair. Built as a final module for IBM’s backend program, this app is all about routes, REST, and reviewing books — heavy on middleware, light on fluff.",
        image: expressBookReviews,
        tags: ['Node.js', 'Express', 'IBM', 'REST API', 'Backend', 'Routing', 'Middleware', 'Authentication'],
        liveDemo: 'https://github.com/MarshallNickolauson/expressBookReviews-ibm',
        github: 'https://github.com/MarshallNickolauson/expressBookReviews-ibm',
        featured: false,
        type: 'Backend',
    },
    {
        id: 5,
        title: 'JavaScript Final Project',
        description: "One-stop shop to show off the classic frontend trio — HTML, CSS, and vanilla JS. Toss in a JSON API and some state management, and you’ve got yourself a working example of the browser in action.",
        image: jsFinalProject,
        tags: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation', 'JSON API', 'Frontend', 'Event Handling', 'Web Design'],
        liveDemo: 'https://github.com/MarshallNickolauson/js-final-project',
        github: 'https://github.com/MarshallNickolauson/js-final-project',
        featured: false,
        type: 'Frontend',
    },
    {
        id: 6,
        title: 'Apollonia Dental Practice',
        description: "Not flashy, but rock solid. This MERN build focused on connecting the backend dots — Mongo, Express, React, and Node — into a functional employee management system. It’s all about wiring, not window dressing.",
        image: apolloniaDental,
        tags: ['MERN', 'MongoDB', 'Express', 'React', 'Node.js', 'Employee Management', 'CRUD', 'Backend Integration'],
        liveDemo: 'https://github.com/MarshallNickolauson/apollonia-dental-practice',
        github: 'https://github.com/MarshallNickolauson/apollonia-dental-practice',
        featured: false,
        type: 'Fullstack',
    },
    {
        id: 7,
        title: 'ProShop',
        description: "A full-on eCommerce stack straight from Traversy’s playbook. Build your own storefront with cart, checkout, product management, and auth — it’s the digital shop you didn’t know you needed.",
        image: proshop,
        tags: ['MERN', 'eCommerce', 'MongoDB', 'React', 'Redux', 'Node.js', 'Express', 'JWT', 'Stripe', 'Admin Panel'],
        liveDemo: 'https://github.com/MarshallNickolauson/proshop',
        github: 'https://github.com/MarshallNickolauson/proshop',
        featured: false,
        type: 'Fullstack',
    },
    {
        id: 8,
        title: 'MERN Auth App',
        description: "Authentication 101: JWT, HTTP-only cookies, protected routes, and user flows — all wrapped in a clean MERN setup. It's the kind of project every dev needs in their toolkit.",
        image: mernAuthApp,
        tags: ['MERN', 'Authentication', 'JWT', 'Cookies', 'Node.js', 'Express', 'MongoDB', 'React', 'Login', 'Security'],
        liveDemo: 'https://github.com/MarshallNickolauson/mern-auth-app',
        github: 'https://github.com/MarshallNickolauson/mern-auth-app',
        featured: false,
        type: 'Fullstack',
    },
    {
        id: 9,
        title: 'Goals App',
        description: "You know the one — the classic goal-setting app. Everyone builds one, but this one has full MERN stack wiring and a polished flow for tracking your ambitions (or at least pretending to).",
        image: goalsApp,
        tags: ['MERN', 'Goals', 'CRUD', 'React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'State Management'],
        liveDemo: 'https://github.com/MarshallNickolauson/goals-app',
        github: 'https://github.com/MarshallNickolauson/goals-app',
        featured: false,
        type: 'Fullstack',
    },
    {
        id: 10,
        title: 'Spacecraft 1.19',
        description: "A Minecraft mod inspired by Galacticraft that shoots for the stars — literally. Made in Java to level up modding skills and take on the mysteries of Minecraft space travel.",
        image: spacecraft,
        tags: ['Java', 'Minecraft', 'Modding', 'Galacticraft', 'Game Dev', 'OOP', 'Problem Solving', '1.19'],
        liveDemo: 'https://github.com/MarshallNickolauson/spacecraft-1.19',
        github: 'https://github.com/MarshallNickolauson/spacecraft-1.19',
        featured: false,
        type: 'Game Dev',
    },
    {
        id: 11,
        title: 'Little Lemon API Capstone',
        description: "Capstone project from Meta’s API course on Coursera. Focused on building solid backend endpoints with best practices — clean, RESTful, and ready to serve lemony data.",
        image: littleLemon,
        tags: ['API', 'REST', 'Meta', 'Capstone', 'Backend', 'Coursera', 'Node.js', 'Express'],
        liveDemo: 'https://github.com/MarshallNickolauson/little-lemon-api-capstone',
        github: 'https://github.com/MarshallNickolauson/little-lemon-api-capstone',
        featured: false,
        type: 'Backend',
    },
    {
        id: 12,
        title: 'Django Restaurant API',
        description: "Pure Django power. This backend-focused app dives into models, views, serializers, and auth — all part of Meta’s backend developer track. A kitchen full of Django ingredients.",
        image: djangoApi,
        tags: ['Django', 'Python', 'API', 'Meta', 'Backend', 'REST Framework', 'ORM', 'Authentication'],
        liveDemo: 'https://github.com/MarshallNickolauson/django-restaurant-api',
        github: 'https://github.com/MarshallNickolauson/django-restaurant-api',
        featured: false,
        type: 'Backend',
    },
];

export default projects;