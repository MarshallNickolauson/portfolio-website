import { useEffect } from 'react';

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    // Prevent background scrolling
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Close on outside click
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
            onClick={handleOverlayClick}
        >
            <div
                className="bg-white dark:bg-darkMainBlue border-[1px] border-mainBlack/60 dark:border-mainBlue/60 p-6 rounded-md max-w-lg w-full relative shadow-lg shadow-mainGray/50 dark:shadow-mainBlue/30 scale-in"
                style={{
                    animation: 'fadeInScale 0.3s ease forwards'
                }}
            >
                <button
                    onClick={onClose}
                    className="absolute top-1 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white text-xl"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-md mb-4 shadow-md border-[1px] border-mainGray/40 dark:border-mainBlue/80 shadow-mainGray/40 dark:shadow-mainBlue/30"
                />

                <h2 className="text-xl font-semibold text-mainBlue mb-2">{project.title}</h2>

                <p className="mb-4 text-sm text-gray-700 dark:text-gray-300">{project.description}</p>

                <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="inline-block bg-transparent text-mainBlack dark:text-white/90 border border-mainBlack dark:border-white/90 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">
                    <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-mainBlue text-white rounded-md text-sm hover:bg-blue-700 transition"
                    >
                        Live Demo
                    </a>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-mainBlue text-mainBlue rounded-md text-sm hover:bg-mainBlue hover:text-white transition"
                    >
                        GitHub
                    </a>
                </div>
            </div>

            {/* Optional: Animation styles */}
            <style jsx>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.95);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
            `}</style>
        </div>
    );
};

export default ProjectModal;
