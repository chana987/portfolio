import React from 'react'
import cv from '../assets/cv.png'

const CV = () => {
    const pdf = `${cv}#view=FitH`
    return (
        <div className="cv view">
            <h1>My CV</h1>
            <div className="pdf-container">
                <iframe className="pdf-frame" src="https://docs.google.com/gview?url=https://github.com/chana987/cv/raw/master/cv.pdf&embedded=true" title="cv">
                    <img className="pdf-img" src={cv} alt=""/>
                </iframe>
            </div>
        </div>
    )
}

export default CV
