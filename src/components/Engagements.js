import React from 'react'
import {Link} from 'react-router-dom'
// import Engagement from './Engagement'

const Engagements = (props) => {
  return (
    <div>
        <h2>Engagements Listing</h2>
        <div>
            {props.engagements.map(engagement => 
                <li key={engagement.id}>
                    <Link to={`/engagements/${engagement.id}`}>{engagement.name}: {engagement.status}</Link>
                </li> 
            )}
        </div>
    </div>
  )
}

export default Engagements