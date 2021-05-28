import React from 'react'
import TargetsContainer from '../containers/TargetsContainer'

const Engagement = (props) => {
    
    let engagement = props.engagements[props.match.params.id - 1]
    console.log(engagement)

    // To Do: Refactor hasTargets into Target.js component
    return (
        <div>
            <div>
                <h3>#{engagement ? engagement.id : null}. {engagement ? engagement.name : null} - {engagement ? engagement.status : null} </h3> 
                {engagement ? hasTargets(engagement) : null} 
                <TargetsContainer engagement={engagement}/>
            </div>
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
