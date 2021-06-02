import React from 'react'
import {connect} from 'react-redux';
import TargetForm from '../components/TargetForm'
import Targets from '../components/Targets'
import Target from '../components/Target'
import {Route, Switch} from 'react-router-dom';

class TargetsContainer extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/engagements/:engagement_id/targets/:target_id' render={(routerProps) => <Target {...routerProps} targets={this.props.engagement && this.props.engagement.targets}/>}/> 
                    <Route path = '/engagements/:engagement_id'>
                        <Targets targets={this.props.engagement && this.props.engagement.targets}/>
                        <TargetForm engagement={this.props.engagement}/>
                    </Route>
                </Switch>            
            </div>
        )
    }
}

// TODO: TRY AND GET THIS WORKING - READ THE DOCS!  Do we neccessarily even need this nested mapStatetoProps?
const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    console.log(ownProps.engagement)
    // console.log(ownProps.engagement.id)
    // console.log(state.engagements[ownProps.engagement.id].targets)
    return {
        targets: state.targets // ownProps.engagement.targets only works on second invocation
    }
}

export default connect(mapStateToProps)(TargetsContainer)