import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiRedux, SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import SkillBar from "./SkillBar";
import { useInView } from "react-intersection-observer";
import { useState } from "react";

const SkillsSection = () => {
    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const { ref: divRef, inView: isVisible } = useInView({ threshold: 0.01 });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);

    if (isVisible && !hasBeenViewed) {
        setHasBeenViewed(true);
    }

    const toolCategories = [
        {
            category: 'Frontend',
            tools: [
                {
                    url: "https://react.dev/",
                    icon: <FaReact className="text-3xl" color="#61DBFB" />,
                    title: 'React.js',
                    skill: 85,
                    description: 'A fast, scalable framework for building efficient UIs.'
                },
                {
                    url: "https://redux.js.org/introduction/getting-started/",
                    icon: <SiRedux className="text-3xl" color="#7349C2" />,
                    title: 'Redux',
                    skill: 70,
                    description: 'A predictable state container for managing app-wide state in large applications.'
                },
                {
                    url: "https://tailwindcss.com/",
                    icon: <RiTailwindCssFill className="text-3xl" color="#38BDF8" />,
                    title: 'Tailwind CSS',
                    skill: 90,
                    description: 'A utility-first CSS framework for building responsive designs quickly.'
                },
                {
                    url: "https://devdocs.io/javascript/",
                    icon: <IoLogoJavascript className="text-3xl" color="#F7DF1E" />,
                    title: 'JavaScript',
                    skill: 85,
                    description: 'The core programming language for building dynamic web applications.'
                }
            ]
        },
        {
            category: 'Backend',
            tools: [
                {
                    url: "https://nodejs.org/en",
                    icon: <FaNodeJs className="text-3xl" color="#8CC84B" />,
                    title: 'Node.js',
                    skill: 35,
                    description: 'A JavaScript runtime for building scalable server-side applications.'
                },
                {
                    url: "https://expressjs.com/",
                    icon: <SiExpress className="text-3xl" color="#ffffff" />,
                    title: 'Express',
                    skill: 15,
                    description: 'A minimal and flexible web framework for Node.js, ideal for building APIs.'
                },
                {
                    url: "https://www.mongodb.com/",
                    icon: <SiMongodb className="text-3xl" color="#4CAF50" />,
                    title: 'MongoDB',
                    skill: 25,
                    description: 'A NoSQL database built for modern applications, allowing fast and flexible data storage.'
                },
                {
                    url: "https://www.mysql.com/",
                    icon: <GrMysql className="text-3xl" color="#009AD3" />,
                    title: 'MySQL',
                    skill: 90,
                    description: 'A powerful language for managing and querying relational databases.'
                }
            ]
        }
    ];

    return (
        <section id="skills">
            <div className="container mx-auto mt-10 py-10">
                <div ref={divRef} className={`flex flex-col justify-center items-center ${hasBeenViewed ? 'fade-in-bottom' : ''}`}>
                    <p className="font-ropa text-white tracking-wider text-xl">-My Tech Stack</p>
                    <h1 className="mt-4 text-mainOrange text-5xl font-roboto font-bold tracking-wider text-center px-2">What can I do best?</h1>
                    <span className="mt-6 block w-[180px] h-[2px] bg-mainOrange"></span>
                </div>

                <div className="flex flex-col md:flex-row justify-between">
                    {toolCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="flex flex-col items-center mx-auto md:mx-0 w-full">
                            <p className={`font-ropa text-white tracking-wider text-2xl mb-8 mt-8 ${hasBeenViewed ? 'fade-in-bottom-slow' : ''}`}>
                                {category.category}
                            </p>
                            {category.tools.map((tool, toolIndex) => (
                                <div
                                    key={toolIndex}
                                    onClick={() => openInNewTab(tool.url)}
                                    className="bg-mainGrayDark px-4 py-3 rounded-xl white-shadow hover:cursor-pointer w-10/12 mb-4 min-h-[180px] flex flex-col justify-center"
                                >
                                    <div className="flex flex-row items-center">
                                        {tool.icon}
                                        <p className="font-ropa text-white tracking-wider text-xl ml-2">{tool.title}</p>
                                    </div>
                                    <SkillBar level={tool.skill} />
                                    <p className="font-ropa text-gray-200 tracking-wider text-md">{tool.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
