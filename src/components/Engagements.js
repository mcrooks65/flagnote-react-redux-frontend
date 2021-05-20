import React from 'react'

const Engagements = (props) => {
    
  return (
    
    <div>
        {props.engagements.map(engagement => <li key={engagement.id}>{engagement.name} - {engagement.status}</li> )}
    </div>

  )
}

export default Engagements