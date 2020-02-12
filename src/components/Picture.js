import React, { Fragment, useState, useEffect } from 'react'

const Picture = ({ p }) => {
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
        checkImage(p)
    }, [])

    return (
        <Fragment>
            {image && <div className="picture-frame">
                <img src={p} alt="" className="gallery-pic" />
            </div>}
        </Fragment>
    )
}

export default Picture
