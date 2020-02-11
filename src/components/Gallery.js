import React from 'react'
import Picture from './Picture'

const pics = []

const Gallery = () => {
    return (
        <div className="gallery view">
            <h1>Gallery</h1>
            <div className="pics">
                {pics.map((p, i) => <Picture p={p} key={i} />)}
            </div>
        </div>
    )
}

export default Gallery
