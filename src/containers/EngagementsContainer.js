import React from 'react';
import {connect} from 'react-redux';
import {fetchEngagements} from '../actions/fetchEngagements';
import Engagements from '../components/Engagements';
import EngagementForm from '../components/EngagementForm';


class EngagementsContainer extends React.Component {

    componentDidMount() {
       this.props.fetchEngagements()
    }

    render() {
        return (
            <div>
                <EngagementForm/>
                <Engagements engagements={this.props.engagements}/>
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