import React from 'react'
import TargetForm from '../components/TargetForm'
import Targets from '../components/Targets'

class TargetsContainer extends React.Component {
    render() {
        return (
            <div>
                <h3>TargetsContainer</h3>
                <TargetForm/>
                <Targets targets={this.props.engagement && this.props.engagement.targets}/>
            </div>
        )
    }
}

export default TargetsContainer