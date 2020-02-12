import React, { Fragment, useState, useEffect } from 'react'
import cv from '../assets/cv.png'

const CV = () => {
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
        checkImage(cv)
    }, [])

    return (
        <div className="cv view">
            <h1>My CV</h1>
            {image && <div className="pdf-container">
                <img className="pdf-frame" src={cv} />
            </div>}
        </div>
    )
}

export default CV
