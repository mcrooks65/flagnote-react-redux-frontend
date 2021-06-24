import React from 'react'
import TargetsContainer from '../containers/TargetsContainer'

const Engagement = (props) => {

    let engagementID = props.match.params.id - 1
    let engagement = props.engagements[engagementID]

    return (
        <div class="font-mono p-8 bg-red-700">
            <div>
                <h3 class="text-center text-black text-5xl font-bold p-4">#{engagement ? engagement.id : null}. {engagement ? engagement.name : null} - {engagement ? engagement.status : null} </h3>            
                <TargetsContainer engagement={engagement}/>
            </div>
        </div>
    )
}

export default Engagement