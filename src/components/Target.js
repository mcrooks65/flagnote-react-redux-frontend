import React from 'react'
import {connect} from 'react-redux'
import {addTarget} from '../actions/addTarget'

class Target extends React.Component<props> {
    //How do i get props into this class?
    // let target = props.targets.filter(target => target.id == props.match.params.target_id)[0]
    // Need to make initial state match correctprops...
    state = {
        ipaddress: '',
        hostname: '',
        sysinfo: 'Requires Enumeration!',
        vulns: 'None found yet, keep enumerating!',
        log: 'Log activities and enter notes here.',
        loot: 'Flags, Credentials, Hashes go here.',
        status: 'Vacant'
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTarget(this.state, this.props.engagement.id)
        this.setState({
            ipaddress: '',
            hostname: '',
            sysinfo: 'Requires Enumeration!',
            vulns: 'None found yet, keep enumerating!',
            log: 'Log activities and enter notes here.',
            loot: 'Flags, Credentials, Hashes go here.',
            status: 'Vacant'
        })
    }

    render() {
        return (          
                <div>
                  <label>Hostname: </label>
                    <input type="text" name="hostname" value={this.state.hostname} onChange={this.handleChange}></input>
                 <form>
                    <ul>          
                        <li>Status:
                            <select name="status" onChange={this.handleChange}>
                                <option>Vacant</option>
                                <option>Shelled</option>
                                <option>Rooted</option>
                            </select>  
                        </li>   
                        <li>IP - {this.state.ipaddress}</li>
                        <li>Target ID - {this.state.id}</li>
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

// Likely require a new action editTarget...  Or possibly not?  addTarget might already cover this...
export default connect(null, {addTarget})(Target)

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

