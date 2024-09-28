import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import project1pic from '../assets/img/project-1.png'

const ProjectsSection = () => {
    const { ref: divRef, inView: isVisible } = useInView({ threshold: 0.01 });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);

    if (isVisible && !hasBeenViewed) {
        setHasBeenViewed(true);
    }

    const projectsList = [
        {
            picture: project1pic,
            title: "Manage",
            description: "Manage is a task management tool that helps companies organize, prioritize, and track projects for improved productivity. Another catching sentence that has ...",
        },
        {
            picture: project1pic,
            title: "Manage",
            description: "Manage is a task management tool that helps companies organize, prioritize, and track projects for improved productivity. Another catching sentence that has ...",
        },
        {
            picture: project1pic,
            title: "Manage",
            description: "Manage is a task management tool that helps companies organize, prioritize, and track projects for improved productivity. Another catching sentence that has ...",
        },
        {
            picture: project1pic,
            title: "Manage",
            description: "Manage is a task management tool that helps companies organize, prioritize, and track projects for improved productivity. Another catching sentence that has ...",
        }
    ]

    return (
        <section id='projects' className='bg-gray-700 pt-10 lg:pt-2'>
            <div className='container mx-auto mt-0 lg:mt-10'>
                <div ref={divRef} className={`flex flex-col justify-center items-center ${hasBeenViewed ? 'fade-in-bottom' : ''}`}>
                    <p className='font-ropa text-white tracking-wider text-xl'>-Some Recent Projects</p>
                    <h1 className='mt-4 text-mainOrange text-5xl font-roboto font-bold tracking-wider'>My Work</h1>
                    <span className="mt-7 block w-[180px] h-[2px] bg-mainOrange"></span>
                    <p className='font-ropa text-white tracking-wider text-xl mt-12 mb-5 text-center'>
                        Each project provides insight to the development processes, showcasing how specific problems were addressed.
                    </p>
                </div>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-y-5 lg:gap-y-8 mt-10 pb-10 ${hasBeenViewed ? 'fade-in-bottom' : ''}`}>

                    {projectsList.map((project, projectIndex) => (
                        <div key={projectIndex} className='flex justify-center bg-mainGray rounded-xl white-shadow hover:cursor-pointer w-11/12 mb-4 mx-auto'>
                            <div className='flex flex-col'>
                                <img
                                    src={project.picture}
                                    alt="project"
                                    className='w-full rounded-t-xl'
                                />
                                <div className='px-3 mt-3 space-y-3'>
                                    <h1 className='text-white font-roboto font-bold tracking-wider text-2xl'>
                                        {project.title}
                                    </h1>
                                    <p className='font-ropa text-lg text-gray-200 tracking-wider text-md'>
                                        {project.description}
                                    </p>
                                    <p className='font-ropa text-lg text-gray-200 tracking-wider text-md underline hover:cursor-pointer pb-2'>
                                        Click to read
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection
