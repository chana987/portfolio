import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Project = ({ p }) => {

    return (
        <div className="project">
            <div className="project-pics">
                <img src={p.img1} alt="" className="project-pic" />
                <a href={p.github} ><img src={p.img2} alt="" className="project-pic slide" /></a>
            </div>
            <h5 className="project-name">{p.name}</h5>
            <a href={p.github} ><FontAwesomeIcon className="project-icon" icon={['fab', 'github']} /></a>
            {p.url && <a href={p.url} ><FontAwesomeIcon className="project-icon" icon="globe" /></a>}
        </div>
    )
}

export default Project
