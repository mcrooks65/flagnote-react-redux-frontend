import React from 'react'

const Engagements = (props) => {
    console.log(props)
  return (
    
    <div>
        <h2>Engagements Listing</h2>
        <ul>
            {props.engagements.map(engagement => 
                <li key={engagement.id}>
                    <h3>#{engagement.id}. {engagement.name} - {engagement.status} </h3>
                    <ul> 
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
                </li> 
            )}
        </ul>
    </div>
  )
}

export default Engagements