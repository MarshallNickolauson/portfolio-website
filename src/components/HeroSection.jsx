import React from 'react'
import pic from '../assets/img/hero-pic.jpg'
import backgroundImage from '../assets/img/hero-background.png'

const HeroSection = () => {
    return (
        <div 
            className='mt-10 bg-cover bg-center bg-no-repeat h-screen'
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className='container mx-auto'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='space-y-16 mb-10 flex-1'>
                        <div>
                            <h1 className='text-white font-ropa text-6xl'>Hello, I'm<span className='text-mainOrange font-roboto font-bold ml-3'>Marshall</span></h1>
                            <p className='text-mainOrange tracking-wider font-roboto font-bold text-lg mt-1'>Full Stack <span className='text-white font-normal tracking-wide'>Developer & Web Designer</span></p>
                        </div>
                        <p className='text-white tracking-wider text-xl'>I specialize in building fast, scale-able websites and <br /> web apps using the <span className='relative font-bold tracking-wider bg-gradient-to-r from-mainOrange to-blue-400 bg-clip-text text-transparent hover:cursor-pointer'>MERN<span className="absolute left-0 bottom-0 w-full h-[1px] bg-gradient-to-r from-mainOrange to-blue-400"></span></span> stack.</p>
                        <div className='flex flex-row space-x-2'>
                            <button className='font-ropa text-xl text-white px-3 py-2 border border-mainOrange rounded-md hover:bg-mainOrange transition duration-100'>
                                View Work
                            </button>
                            <button className='font-ropa text-xl text-white px-3 py-2 border border-mainOrange rounded-md bg-mainOrange hover:bg-mainOrangeDark transition duration-100'>
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div className='flex-1'>
                        <img 
                        src={pic} 
                        alt="Marshall"
                        className='w-8/12 max-w-full object-contain mx-auto rounded-lg float-left'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
