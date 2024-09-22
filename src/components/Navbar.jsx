import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='container mx-auto py-2 mt-2'>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-roboto font-bold text-3xl text-mainOrange'>{"<MDN />"}</h1>
                    <div className='space-x-10'>
                        <a href='#about' className='font-ropa text-white text-xl hover:underline'>About</a>
                        <a href='#projects' className='font-ropa text-white text-xl hover:underline'>Projects</a>
                        <a href='#skills' className='font-ropa text-white text-xl hover:underline'>Skills</a>
                        <a href='#resume' className='font-ropa text-white text-xl hover:underline'>Resume</a>
                        <a href='#contact' className='font-ropa text-white text-xl hover:underline'>Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
