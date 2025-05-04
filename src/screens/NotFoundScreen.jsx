import { Link } from 'react-router-dom';

const NotFoundScreen = () => {
    return (
        <section className='flex flex-col justify-center items-center h-screen text-center px-4 bg-white dark:bg-darkMainBlue transition-colors duration-300'>
            <h1 className='text-6xl font-bold text-mainBlack dark:text-white mb-4'>404 Not Found</h1>
            <p className='text-xl text-mainGray dark:text-white/80 mb-6'>This page does not exist.</p>
            <Link
                to='/'
                className='text-sm font-medium text-white bg-mainBlue hover:bg-mainBlue/80 transition-colors px-4 py-2 rounded-full'
            >
                Go Back Home
            </Link>
        </section>
    );
};

export default NotFoundScreen;
