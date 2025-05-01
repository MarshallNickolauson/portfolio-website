import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
    return (
        <div className='bg-gradient-to-t from-white to-mainBlueLight h-[500px] w-full pt-[60px]'>
            <div className='flex flex-col items-center justify-center h-full'>
                <h1 className='font-semibold text-[5rem] bg-gradient-to-r from-mainBlue/85 to-mainBlueDark bg-clip-text text-transparent'>Hi, I'm Marshall</h1>{' '}
                <p className='font-medium text-mainGray text-[1.3rem] text-center'>
                    Full Stack Developer specialized in building beautiful,
                    <br />
                    lightning-fast web apps primarily with the MERN stack.
                </p>
                <div className='flex space-x-4 mt-5'>
                    <button className='bg-mainBlue text-white px-[20px] py-3 rounded-md hover:bg-mainBlue/90 transition duration-200'>
                        <h1 className='flex items-center justify-center'>
                            View Projects <FaArrowRight className='ml-2' />
                        </h1>
                    </button>
                    <button className='bg-transparent text-mainBlue px-[35px] py-3 rounded-md border-[1px] border-mainBlue hover:bg-mainBlue/10 transition duration-200'>
                        <h1 className='flex items-center justify-center'>Contact Me</h1>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
