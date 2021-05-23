import React from 'react';
import {connect} from 'react-redux'
import {addEngagement} from '../actions/addEngagement'

class EngagementForm extends React.Component {

    state = {
        name: '',
        status: ''
    }

    handleChange = (event)  => {
        this.setState({
            [event.target.name]: event.target.value
        })
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addEngagement(this.state)
        this.setState({
            name: '',
            status: ''
        })
    }

    render() {
        return (
            <div>
                <h2>Engagement Form (Under Construction)</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Engagement Name: </label>
                    <input type='text' placeholder='CTF Name' value={this.state.name} name="name" onChange={this.handleChange}></input>
                    <br/>
                    <label>Engagement Status: </label>
                    <input type='text' placeholder='0/? flags captured!' value={this.state.status} name="status" onChange={this.handleChange}></input>
                    <br/><br/>
                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addEngagement})(EngagementForm)

