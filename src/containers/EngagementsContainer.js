import React from 'react';
import Engagements from '../components/Engagements'
import EngagementForm from '../components/EngagementForm'
import {connect} from 'react-redux';
import {fetchEngagements} from '../actions/fetchEngagements'

class EngagementsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchEngagements()
    }

    render() {
        return (
            <div>
                <EngagementForm/>
                <Engagements/>
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