import React from 'react';

const MovingSkillsSection = () => {
  const skills = [
    'React', 'JavaScript', 'HTML', 'CSS', 'Node.js',
    'Express', 'MongoDB', 'Python', 'Django', 'Flask',
    'Redis', 'RESTful APIs', 'Tailwind CSS', 'Bootstrap',
  ];

  const repeatedSkills = [...skills, ...skills];

  return (
    <section className="bg-white my-8 overflow-hidden">
      <div className="relative w-full">
        <div className="marquee-track">
          {repeatedSkills.map((skill, index) => (
            <span
              key={index}
              className="font-bold text-mainBlue text-sm bg-mainBlueLight px-5 py-2 mx-2 rounded-full border-[1px] border-mainBlue"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovingSkillsSection;
