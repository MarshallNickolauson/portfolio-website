import React from 'react'
import { useInView } from 'react-intersection-observer';
import pic from '../assets/img/about-pic.jpg'

const AboutSection = () => {
    const { ref: divRef, inView: isVisible } = useInView({ threshold: 0.01 });

    return (
        <div className='container mx-auto mt-40 mb-80'>
            <div ref={divRef}  className="flex flex-row items-center">
                <div className={`flex-shrink-0 ${isVisible ? 'fade-in-left' : 'opacity-0'}`}>
                    <img
                        src={pic}
                        alt="About"
                        className='w-11/12 max-w-full aspect-square object-cover mx-auto rounded-lg float-right shadow-md shadow-white'
                    />
                </div>
                <div className={`flex-1 ml-12 ${isVisible ? 'fade-in-right' : 'opacity-0'}`}>
                    <div className='space-y-8'>
                        <h1 className="text-mainOrange text-5xl font-roboto font-bold tracking-wider">Who Am I?</h1>
                        <span className="block w-[80px] h-[2px] bg-mainOrange"></span>
                        <div className='space-y-8 max-w-full w-10/12'>
                            <p className="font-ropa text-white tracking-wider text-xl">My full name is Marshall David Nickolauson, and my life’s passion is God’s Word.</p>
                            <p className="font-ropa text-white tracking-wider text-xl">I’ve always had a strong interest in technology, and in January of 2022, my coding journey began with the goal of designing solutions that could benefit others and make a positive impact.</p>
                            <p className="font-ropa text-white tracking-wider text-xl">I believe that my faith in God helps me be a better programmer, guiding me to approach challenges with patience, determination, and the desire to bring joy through my work.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection
