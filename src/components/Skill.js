import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IcoMoon from "react-icomoon"
const iconSet = require('../assets/icomoon/selection.json')

const Skill = ({ s }) => {
    return (
        <div className="skill">
            {s.set === 'fontAwesome'
                ? <FontAwesomeIcon className="skill-icon" icon={['fab', s.icon]} /> 
                : <IcoMoon className="skill-icon" icon={s.icon} iconSet={iconSet} size="5rem" />}
            <h5>{s.name}</h5>
        </div>
    )
}

export default Skill
