import React from 'react'
import {Link} from 'react-router-dom'
// import Engagement from './Engagement'

const Engagements = (props) => {
  return (
    <div class="bg-red-700 font-mono p-4">
        <h2 class="text-center text-black text-5xl font-bold p-10">Engagements Listing</h2>
        <div class="text-2xl font-bold italic underline">
            {props.engagements.map(engagement => 
                <li class="p-1"key={engagement.id}>
                    <Link to={`/engagements/${engagement.id}`}>{engagement.name}: {engagement.status}</Link>
                </li> 
            )}
        </div>
    </div>
  )
}

export default Engagements