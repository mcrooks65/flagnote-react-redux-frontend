import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {deleteTarget} from '../actions/deleteTarget'

const Targets = (props) => {

    const handleDelete = (target) => {
        props.deleteTarget(target.id,target.engagement_id)
    }

    return (
        <div class="text-xl">
            <ul> 
            {props.targets && props.targets.map(target => 
                <li class="p-3" key={target.id}>
                    <li class="text-3xl font-bold">Hostname: {target.hostname} - <Link class="underline" to={`/engagements/${target.engagement_id}/targets/${target.id}`}>Edit Target</Link> - <button class="underline" onClick={() => handleDelete(target)}>Delete</button></li>
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

export default connect(null, {deleteTarget})(Targets)