import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home view">
            <h1>Hi! I'm Chana,</h1>
            <Link to="/portfolio"><h2 className="home-link">Come check out my work >>></h2></Link>
        </div>
    )
}

export default Home
