import React from 'react';
import {connect} from 'react-redux';
import {Route} from 'react-router-dom';
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
                <Route exact path= '/' component={WelcomePage}/>
                <Route path='/engagements/new' component={EngagementForm}/>
                <Route path='engagement/:id' render={(routerProps) => <Engagement {...routerProps} engagement={this.props.engagement}/>}/>
                <Route exact path='/engagements' render={() => <Engagements engagements={this.props.engagements}/>}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        engagements: state.engagements
    }

    
}

export default connect(mapStateToProps, {fetchEngagements})(EngagementsContainer)