import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
// import pic from '../assets/img/about-pic.jpg';
import pic from '../assets/img/about-banner.png';

const AboutSection = () => {
    const { ref: divRef, inView: isVisible } = useInView({ threshold: 0.01 });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);

    if (isVisible && !hasBeenViewed) {
        setHasBeenViewed(true);
    }

    return (
        <section className='bg-darkGrayBackground'>
            <div className='container mx-auto py-20 mt-10 lg:mt-20' id='about'>
                <div ref={divRef} className="flex flex-col-reverse lg:flex-row items-center mx-auto">
                    <div className={`flex-shrink-0 mt-8 ${hasBeenViewed ? 'fade-in-left' : 'opacity-0'}`}>
                        <img
                            src={pic}
                            alt="About"
                            className='max-w-full w-10/12 lg:w-full lg:h-[500px] aspect-square object-cover mx-auto rounded-lg lg:float-right white-shadow hover:cursor-pointer'
                        />
                    </div>
                    <div className={`text-center lg:text-left lg:ml-12 ${hasBeenViewed ? 'fade-in-right' : 'opacity-0'}`}>
                        <div className='space-y-8'>
                            <h1 className="text-mainOrange text-5xl font-roboto font-bold tracking-wider">Who Am I?</h1>
                            <span className="block w-[100px] h-[2px] bg-mainOrange mx-auto lg:mx-0"></span>
                            <div className='space-y-8 max-w-full w-11/12 lg:w-10/12 mx-auto px-1 lg:px-0 lg:mx-0 pb-8 lg:pb-0'>
                                <p className="font-ropa text-white tracking-wider text-xl">My full name is Marshall David Nickolauson and one of my life’s passions is using technology to help others.</p>
                                <p className="font-ropa text-white tracking-wider text-xl">I’ve always had a strong interest in technology, and in January of 2022, my coding journey began with the goal of designing solutions that could benefit others and make a positive impact.</p>
                                <p className="font-ropa text-white tracking-wider text-xl">I love God and I believe that my faith helps me be a better programmer, guiding me to approach challenges with patience, determination, and the desire to bring joy through my work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
