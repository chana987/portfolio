import React from 'react'
import Picture from './Picture'
import pictures from '../data/gallery'

const Gallery = () => {
    return (
        <div className="gallery view">
            <h1>Gallery</h1>
            <div className="gallery-pics">
                {pictures.map((p, i) => <Picture p={p} key={i} />)}
            </div>
        </div>
    )
}

export default Gallery
