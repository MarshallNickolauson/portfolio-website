import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomeScreen from './screens/HomeScreen';
import NotFoundScreen from './screens/NotFoundScreen';
import './index.css';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import AboutScreen from './screens/AboutScreen';
import SkillsScreen from './screens/SkillsScreen';
import ProjectsScreen from './screens/ProjectsScreen';
import ContactScreen from './screens/ContactScreen';

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/about' element={<AboutScreen />} />
            <Route path='/skills' element={<SkillsScreen />} />
            <Route path='/projects' element={<ProjectsScreen />} />
            <Route path='/contact' element={<ContactScreen />} />
            <Route path='*' element={<NotFoundScreen />} />
        </>
    ),
    { basename: '/portfolio-website' }
);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeProvider>
            <RouterProvider router={router} />
        </ThemeProvider>
    </StrictMode>
);
