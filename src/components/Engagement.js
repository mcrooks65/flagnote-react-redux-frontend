import React from 'react'


const Engagement = (props) => {

    return(
        <div>
            <h3>#{props.engagement.id}. {props.engagement.name} - {props.engagement.status} </h3> 
            {hasTargets(props.engagement)}
        </div>
    )
}

function hasTargets(engagement) {
    
    if (engagement.targets) {
        return <ul> 
            {engagement.targets.map(target => 
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
    } else {
        // why isn't this line running on page refresh?  works okay when entering new engagement..
        return <ul><li>No targets added!</li></ul>
    }
    
                   
}

export default Engagement