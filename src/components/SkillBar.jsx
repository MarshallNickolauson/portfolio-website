import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ level }) => {
    const [visibleLevel, setVisibleLevel] = useState(0);
    const { ref: divRef, inView: isVisible } = useInView({ threshold: 0.01 });
    const [hasBeenViewed, setHasBeenViewed] = useState(false);

    if (isVisible && !hasBeenViewed) {
        setHasBeenViewed(true);
        setVisibleLevel(level);
    }

    return (
        <div className='mt-3'>
            <p className="font-ropa text-white tracking-wider mb-1">Skill:</p>
            <div className='skill-bar-container'>
                <div ref={divRef} className="skill-bar-fill" style={{ width: `${visibleLevel}%` }}></div>
            </div>
        </div>
    )
}

export default SkillBar
