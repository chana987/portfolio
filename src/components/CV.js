import React, { useEffect } from 'react'
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import cv from '../assets/cv_2023.pdf'

const CV = () => {
    useEffect(() => {
        pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    });

    return (
        <div className="cv view">
            <h1>CV</h1>
            <div className="pdf-container">
                <Document file={ cv }>
                    <Page pageNumber={ 1 } className={"pdf-frame"} scale={1.1} />
                </Document>
            </div>
        </div>
    )
}

export default CV
