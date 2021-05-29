import React from 'react'

const Targets = (props) => {
    return (
        <div>
            <ul> 
            {props.targets && props.targets.map(target => 
                <li key={target.id}>
                    Hostname - {target.hostname}
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

// Once again having trouble showing Engagements have no targets!
// function hasTargets(props) {
//     if (!props.targets){
//         return <ul><li>No targets added!</li></ul>
//     }
// }

export default Targets