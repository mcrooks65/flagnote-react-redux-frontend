import React from 'react'
import Engagement from './Engagement'

const Engagements = (props) => {
  return (
    <div>
        <h2>Engagements Listing</h2>
        <ul>
            {props.engagements.map(engagement => 
                <li key={engagement.id}><Engagement engagement={engagement}/></li> 
            )}
        </ul>
    </div>
  )
}

export default Engagements