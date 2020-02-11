import React from 'react'
import cv from '../assets/cv.pdf'

const CV = () => {
    const pdf = `${cv}#view=FitH`
    return (
        <div className="cv view">
            <h1>My CV</h1>
            <div className="pdf-container">
                <object className="pdf-frame" type="application/pdf" data={pdf}>
                    <p>PDF cannot be displayed.</p>
                </object>
            </div>
        </div>
    )
}

export default CV
