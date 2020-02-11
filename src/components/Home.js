import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="home view">
            <h1>Hi! I'm Chana,</h1>
            <h2><Link className="home-link" to="/portfolio">Come check out my work >>></Link></h2>
        </div>
    )
}

export default Home
