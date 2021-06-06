import React from 'react'
import {Link} from 'react-router-dom'

const Targets = (props) => {
    return (
        <div>
            <ul> 
            {props.targets && props.targets.map(target => 
                <li key={target.id}>
                    Hostname - {target.hostname} - <Link to={`/engagements/${target.engagement_id}/target/${target.id}`}>Edit Target</Link>
                    <ul>
                        <li>IP - {target.ipaddress}</li>
                        <li>Target ID - {target.id}</li>
                        <li>Engagement ID - {target.engagement_id}</li>
                        <li>System Info - {target.sysinfo}</li>
                        <li>Vulnerabilities - {target.vulns}</li>
                        <li>Log - {target.log}</li>
                        <li>Loot - {target.loot}</li>
                        <li>Status - {target.status}</li>
                    </ul>
                </li>
            )}
        </ul>

        </div>
    )
}

export default Targets