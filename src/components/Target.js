import React from 'react'
import {connect} from 'react-redux'
import {editTarget} from '../actions/editTarget'

class Target extends React.Component {

    // How to replace this.props.targets[0] with a variable when it won't let me declare here...
    // Need to fix refresh error - TypeError: Cannot read property '0' of undefined

    // state = {
    //     hostname: this.props.targets[0].hostname,
    //     ipaddress: this.props.targets[0].ipaddress,
    //     target_id: this.props.match.params.target_id,
    //     engagement_id: this.props.match.params.engagement_id,
    //     sysinfo: this.props.targets[0].sysinfo,
    //     vulns: this.props.targets[0].vulns,
    //     log: this.props.targets[0].log,
    //     loot: this.props.targets[0].loot,
    //     status: this.props.targets[0].status
    // }

    state = {
        hostname: 'DEFAULT TEST STATE',
        ipaddress: '1.1.1.1',
        target_id: this.props.match.params.target_id,
        engagement_id: this.props.match.params.engagement_id,
        sysinfo: 'STATE TEST SYSINFO',
        vulns: 'STATE TEST VULNS',
        log: 'STATE TEST LOG',
        loot: 'STATE TEST LOOT',
        status: 'Vacant'
    }

    handleChange = (event) => {
        console.log(this.props)
        console.log(this.props.targets.find(target => target.id === this.props.match.params.target_id))
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // console.log(event)
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
                            <select name="status" onChange={this.handleChange}>
                                <option>Vacant</option>
                                <option>Shelled</option>
                                <option>Rooted</option>
                            </select>  
                        </li>   
                        <li>IP - {this.state.ipaddress}</li>
                        <li>Target ID - {this.state.target_id}</li>
                        <li>Engagement ID - {this.state.engagement_id}</li>
                        <li>System Info: </li>
                        <textarea name="sysinfo" value={this.state.sysinfo} onChange={this.handleChange}></textarea>
                        <li>Vulnerabilities </li>
                        <textarea name="vulns" value={this.state.vulns} onChange={this.handleChange}></textarea>
                        <li>Log:</li>
                        <textarea name="log" value={this.state.log} onChange={this.handleChange}></textarea>
                        <li>Loot:</li>
                        <textarea name="loot" value={this.state.loot} onChange={this.handleChange}></textarea>
                    </ul>
                    <br/><br/>
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

