import React from 'react'
import cv from '../assets/cv.png'

const CV = () => {
    const pdf = `${cv}#view=FitH`
    return (
        <div className="cv view">
            <h1>My CV</h1>
            <div className="pdf-container">
                <img className="pdf-frame" src={cv} />
            </div>
        </div>
    )
}

export default CV
