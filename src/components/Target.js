import React from 'react'
import {connect} from 'react-redux'
import {editTarget} from '../actions/editTarget'

class Target extends React.Component {

    // Need to fix refresh error - TypeError: Cannot read property '0' of undefined
    // Okay refresh error half fixed... needs to force a fresh update of state or something...
    // Also make sure it can work with multiple targets, right now with this.props.targets[0] it's only accessing first target in array.
    state = {
        hostname: this.props.target.hostname,
        status: this.props.target.status,
        ipaddress: this.props.target.ipaddress,
        target_id: this.props.match.params.target_id,
        engagement_id: this.props.match.params.engagement_id,
        sysinfo: this.props.target.sysinfo,
        vulns: this.props.target.vulns,
        log:this.props.target.log,
        loot: this.props.target.loot,
    }

    handleChange = (event) => {
        console.log(this.props)
        // console.log(this.props.targets.find(target => target.id === this.props.match.params.target_id))
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editTarget(this.state, this.props.engagement.id)
    }

    render() {
        return (          
                <div>
                  <label>Hostname: </label>
                    <input type="text" name="hostname" value={this.state.hostname} onChange={this.handleChange}></input>
                 <form onSubmit={this.handleSubmit}>
                    <ul>          
                        <li>Status:
                            <select name="status" value={this.state.status} onChange={this.handleChange}>
                                <option>Vacant</option>
                                <option>Shelled</option>
                                <option>Rooted</option>
                            </select>  
                        </li>   
                        <li>IP - <input type='text' value={this.state.ipaddress} onChange={this.handleChange}/></li>
                        <li>Target ID - {this.state.target_id}</li>
                        <li>Engagement ID - {this.state.engagement_id}</li>
                        <li>System Info: </li>
                        <textarea name="sysinfo" rows="6" cols="100" value={this.state.sysinfo} onChange={this.handleChange}></textarea>
                        <li>Vulnerabilities </li>
                        <textarea name="vulns" rows="6" cols="100" value={this.state.vulns} onChange={this.handleChange}></textarea>
                        <li>Log:</li>
                        <textarea name="log" rows="6" cols="100" value={this.state.log} onChange={this.handleChange}></textarea>
                        <li>Loot:</li>
                        <textarea name="loot" rows="6" cols="100" value={this.state.loot} onChange={this.handleChange}></textarea>
                    </ul>
                    <input type="submit"/>
                 </form>              
             </div>
        )}
       
}

export default connect(null, {editTarget})(Target)

// Left over code from first attempt... it's easier to grab props from arrow functions, but i don't know how to make a form without using a class.  Or if it's possible.. NEED TO RTFD
// const Target = (props) => {
  
//     console.log(props.targets[0])
    
//     let target = props.targets.filter(target => target.id == props.match.params.target_id)[0]

//     console.log(target[0])
//      return (
//          <div>
             
//          </div>
//    )
 
//  }

    // state = {
    //     hostname: 'DEFAULT TEST STATE',
    //     ipaddress: '1.1.1.1',
    //     target_id: this.props.match.params.target_id,
    //     engagement_id: this.props.match.params.engagement_id,
    //     sysinfo: 'STATE TEST SYSINFO',
    //     vulns: 'STATE TEST VULNS',
    //     log: 'STATE TEST LOG',
    //     loot: 'STATE TEST LOOT',
    //     status: 'Vacant'
    // }