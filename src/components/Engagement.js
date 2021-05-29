import React from 'react'
import TargetsContainer from '../containers/TargetsContainer'

const Engagement = (props) => {
    
   let engagement = props.engagements[props.match.params.id - 1]
   
    // console.log(props)
    // let engagement = props.engagements.filter(engagement => engagement.id == props.match.params.id)

    return (
        <div>
            <div>
                <h3>#{engagement ? engagement.id : null}. {engagement ? engagement.name : null} - {engagement ? engagement.status : null} </h3> 
                <TargetsContainer engagement={engagement}/>
            </div>
        </div>
  )

}

export default Engagement
