import React from 'react'
import Skill from './Skill'

const skills = [
    {
        name: 'HTML5',
        icon: 'html5'
    },
    {
        name: 'CSS3',
        icon: 'css3-alt'
    },
    {
        name: 'Javascript',
        icon: 'js'
    },
    {
        name: 'Sass',
        icon: 'sass'
    },
    {
        name: 'Less',
        icon: 'less'
    },
    {
        name: 'React',
        icon: 'react'
    },
    {
        name: 'NodeJS',
        icon: 'node'
    },
    {
        name: 'GitHub',
        icon: 'github'
    },
    {
        name: 'Git',
        icon: 'git-alt'
    }
]

const About = () => {
    return (
        <div className="about view">
            <div className="pic"></div>
            <h1>About Me</h1>
            <p className="about-me">
                I lived in quite a few place in the US, traveling a lot, before I moved to Israel at the age of 7.<br />
                As an adult, I've lived in three major metropolitan areas in Israel: Jerusalem, Haifa and Tel Aviv. In each one I have developed a new sense of style and a different perspective on Israeli society.<br />
                I enjoy doing all sorts of art, from pen sketches to stained glass. I also love learning new skills, making things with my own hands, and working out complex puzzles.
                        </p>
            <div className="skills">
                {skills.map((s, i) => <Skill s={s} key={i} />)}
            </div>
        </div>
    )
}

export default About