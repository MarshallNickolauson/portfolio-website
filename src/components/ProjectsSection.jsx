import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import project1pic from '../assets/img/project-1.png'

const ProjectsSection = () => {
    const { ref: divRef, inView: isVisible } = useInView({ threshold: 0.01 });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);

    if (isVisible && !hasBeenViewed) {
        setHasBeenViewed(true);
    }

    return (
        <div id='projects'>
            <div className='container mx-auto mb-60'>
                <div ref={divRef} className={`flex flex-col justify-center items-center ${hasBeenViewed ? 'fade-in-bottom' : ''}`}>
                    <p className='font-ropa text-white tracking-wider text-xl'>-Some Recent Projects</p>
                    <h1 className='mt-4 text-mainOrange text-5xl font-roboto font-bold tracking-wider'>My Work</h1>
                    <span className="mt-7 block w-[180px] h-[2px] bg-mainOrange"></span>
                    <p className='font-ropa text-white tracking-wider text-xl mt-12'>Click on a project to explore a detailed showcase</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mt-10'>
                    <div className='flex justify-center bg-mainGrayDark rounded-xl white-shadow hover:cursor-pointer w-10/12 mb-4 mx-auto'>
                        <div className='flex flex-col'>
                            <img
                                src={project1pic}
                                alt="project"
                                className='w-full rounded-t-xl'
                            />
                            <div className='px-3 mt-2 space-y-3'>
                                <h1 className='text-white font-roboto font-bold tracking-wider text-xl'>Manage</h1>
                                <p className='font-ropa text-gray-200 tracking-wider text-md'>
                                    Manage is a task management tool that helps companies organize, prioritize, and track projects for improved productivity. Another catching sentence that has ...
                                </p>
                                <p className='font-ropa text-gray-200 tracking-wider text-md underline hover:cursor-pointer pb-2'>Read more</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        box
                    </div>
                    <div>
                        box
                    </div>
                    <div>
                        box
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection
