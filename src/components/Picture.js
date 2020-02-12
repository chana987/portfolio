import React from 'react'

const Picture = ({ p }) => {
    return (
        <div className="picture-frame">
            <img src={p} alt="" className="gallery-pic" />
        </div>
    )
}

export default Picture
