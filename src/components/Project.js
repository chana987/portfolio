import React, { Fragment, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Project = ({ p }) => {

    const checkImage = path => {
        new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(path)
            img.onerror = () => reject()
            img.src = path
        })
            .then(() => {
                setImage(true)
            })
    }

    const [image, setImage] = useState(false)

    useEffect(() => {
        checkImage(p.img1)
        checkImage(p.img2)
    }, [p])

    return (
        <Fragment>
            {image && <div className="project">
                <div className="project-pics">
                    <img src={p.img1} alt="" className="project-pic" />
                    <a href={p.github} ><img src={p.img2} alt="" className="project-pic slide" /></a>
                </div>
                <h5 className="project-name">{p.name}</h5>
                <a href={p.github} ><FontAwesomeIcon className="project-icon" icon={['fab', 'github']} /></a>
                {p.url && <a href={p.url} ><FontAwesomeIcon className="project-icon" icon="globe" /></a>}
            </div>
            }
        </Fragment>
    )
}

export default Project
