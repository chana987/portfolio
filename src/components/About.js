import React from 'react'
import Skill from './Skill'
import skills from '../data/skills'

const About = () => {
    return (
        <div className="about view">
            <div className="pic"></div>
            <h1>A little about me:</h1>
            <p className="about-me">
                A full stack developer with a keen eye for detail and an artistic flair.<br />
                I love to solve complex problems and create beautiful products. I'm passionate about creating the best user experience possible.<br />
                I'm a fast learner and I'm always looking to improve my skills.<br />
                My meticulous approach and understanding of the full picture have helped me navigate challenging situations and create innovative solutions.
            </p>
            <div className="skills">
                {skills.map((s, i) => <Skill s={s} key={i} />)}
            </div>
        </div>
    )
}

export default About