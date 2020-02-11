import React from 'react'

const Picture = ({ p }) => {
    return (
        <div className="picture-frame">
            <img src={`${process.env.PUBLIC_URL}/gallery/${p}`} alt="" className="gallery-pic" />
        </div>
    )
}

export default Picture
