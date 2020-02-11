import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Skill = ({ s }) => {
    return (
        <div className="skill">
            <FontAwesomeIcon className="skill-icon" icon={['fab', s.icon]} />
            <h5>{s.name}</h5>
        </div>
    )
}

export default Skill
