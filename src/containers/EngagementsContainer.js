import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router-dom';
import {fetchEngagements} from '../actions/fetchEngagements';
import Engagements from '../components/Engagements';
import Engagement from '../components/Engagement';
import EngagementForm from '../components/EngagementForm';
import WelcomePage from '../components/WelcomePage';


class EngagementsContainer extends React.Component {

    componentDidMount() {
       this.props.fetchEngagements()
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path= '/' component={WelcomePage}/>
                    <Route exact path='/engagements'>
                        <Engagements engagements={this.props.engagements}/>
                        <EngagementForm/>
                    </Route>
                    <Route path='/engagements/new' component={EngagementForm}/>
                    <Route path='/engagements/:id' render={(routerProps) => <Engagement {...routerProps} engagements={this.props.engagements}/>}/>             
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        engagements: state.engagements
    }
}

export default connect(mapStateToProps, {fetchEngagements})(EngagementsContainer)