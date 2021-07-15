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
            <div class="container font-mono p-4">
                <h2 class="text-center text-black text-5xl font-bold p-4">Add Engagement</h2>
                <br/>
                <div class="text-2xl flex-col text-left">
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Engagement Name: </label>
                            <input class="bg-gray-700 p-1" type='text' placeholder='CTF Name' value={this.state.name} name="name" onChange={this.handleChange}></input>
                        </div>   
                        <br/>
                        <label>Engagement Status: </label>
                        <input class="bg-gray-700 p-1" type='text' placeholder='0/? flags captured' value={this.state.status} name="status" onChange={this.handleChange}></input>
                        <br/><br/>
                        <input value="Submit New Engagement" class="bg-green-700 p-2" type="submit"/>
                    </form>
                </div>
                
            </div>
        )
    }
}

export default connect(null, {addEngagement})(EngagementForm)

