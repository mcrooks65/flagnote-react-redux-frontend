import React from 'react'

const Engagements = (props) => {

  return (

    // When uncommented we have a TypeError: props.engagements.map is not a function - Need to find a fix! 
    <div>
      {/* {props.engagements.map(engagement => <li key={engagement.id}>{engagement.name} - {engagement.status}</li> )} */}
    </div>

  )
}

export default Engagements