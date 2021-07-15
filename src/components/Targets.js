import React from 'react'
import {connect} from 'react-redux'
import {deleteTarget} from '../actions/deleteTarget'
import Target from './Target.js'


class Targets extends React.Component {

    state = {
            likeMultiplyer: 1,
            // likes: 0
        }

    handleDelete = (target) => {
        this.props.deleteTarget(target.id,target.engagement_id)
    }

    handleChange = (event) => {
        this.setState({
            likeMultiplyer: event.target.value
        })
    }

    
    render() {
        return (
            <div class="text-xl container">
                <ul> 
                <label>Input Like Multiplyer: </label>
                <input onChange={this.handleChange} placeholder={this.state.input}></input>
                {this.props.targets && this.props.targets.map(target => 
                    <Target target={target} likeMultiplyer={this.state.likeMultiplyer}/>
                )}
                
            </ul>
            </div>
        )
    }
}

export default connect(null, {deleteTarget})(Targets)