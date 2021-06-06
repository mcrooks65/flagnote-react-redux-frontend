import React from 'react'
import {connect} from 'react-redux';
import TargetForm from '../components/TargetForm'
import Targets from '../components/Targets'
// import Target from '../components/Target'
import {Route, Switch} from 'react-router-dom';

class TargetsContainer extends React.Component {

    render() {
        return (
            <div>
                <Switch>
                    {/* <Route exact path='/engagements/:engagement_id/targets/:target_id' render={(routerProps) => <Target {...routerProps} targets={this.props.engagement && this.props.engagement.targets}/>}/>  */}
                    <Route path = '/engagements/:engagement_id'>
                        <Targets targets={this.props.engagement && this.props.engagement.targets}/>
                        <TargetForm engagement={this.props.engagement}/>
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default connect(null)(TargetsContainer)