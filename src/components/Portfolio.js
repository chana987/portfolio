import React from 'react'
import Project from './Project'

const projects = [
    {
        name: "Comic Clan",
        img1: "comic-clan-1.png",
        img2: "comic-clan-2.png",
        github:"https://github.com/chana987/comic-clan"
    },
    {
        name: "Natours",
        img1: "natours-1.png",
        img2: "natours-2.png",
        github: "https://github.com/chana987/Natours",
        url: "https://chana987.github.io/Natours/"
    },
    {
        name: "Nexter",
        img1: "nexter-1.png",
        img2: "nexter-2.png",
        github: "https://github.com/chana987/Nexter/",
        url: "https://chana987.github.io/Nexter/"
    },
    {
        name: "Trillo",
        img1: "trillo-1.png",
        img2: "trillo-2.png",
        github: "https://github.com/chana987/Trillo/",
        url: "https://chana987.github.io/Trillo/"
    },
    {
        name: "CRM",
        img1: "crm-1.png",
        img2: "crm-2.png",
        github: "https://chana987.github.io/CRM/"
    },
    {
        name: "oNecklace",
        img1: "onecklace-1.png",
        img2: "onecklace-2.png",
        github: "https://github.com/chana987/oNecklace/",
        url: "https://chana987.github.io/oNecklace/"
    },
]

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
