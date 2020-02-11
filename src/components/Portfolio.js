import React from 'react'
import Project from './Project'
import projects from '../data/projects'

const Portfolio = () => {
    return (
        <div className="portfolio view">
            <h1>Portfolio</h1>
            <div className="projects">
                {projects.map((p, i) => <Project p={p} key={i} />)}
            </div>
        </div>
    )
}

export default Portfolio
