import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem('marshall-nickolauson-theme');
        return storedTheme ? storedTheme === 'dark' : true;
    });

    const toggleTheme = () => setDarkMode((prev) => !prev);

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.classList.add('dark');
            localStorage.setItem('marshall-nickolauson-theme', 'dark');
        } else {
            root.classList.remove('dark');
            localStorage.setItem('marshall-nickolauson-theme', 'light');
        }
    }, [darkMode]);

    return <ThemeContext.Provider value={{ darkMode, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
