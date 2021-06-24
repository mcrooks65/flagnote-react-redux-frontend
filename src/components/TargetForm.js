import React from 'react'
import {connect} from 'react-redux'
import {addTarget} from '../actions/addTarget'

class TargetForm extends React.Component {

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
            <div class="text-2xl p-2">
                <h2 class="text-center text-black text-4xl font-bold p-8">Add New Target to This Engagement</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Hostname: </label>
                    <input class="bg-gray-700 p-1" placeholder="VulnSiteExample.com" type="text" name="hostname" value={this.state.hostname} onChange={this.handleChange}></input>
                    <br/>
                    <label>IP Address: </label>
                    <input class="bg-gray-700 p-1" placeholder="1.2.3.4" type="text" name="ipaddress" value={this.state.ipaddress} onChange={this.handleChange}></input>
                    <br/>
                    {/* <label>Status: </label>
                    <select name="status" value={this.state.status} onChange={this.handleChange}>
                        <option>Vacant</option>
                        <option>Shelled</option>
                        <option>Rooted</option>
                    </select> */}
                    <br/><br/>
                    <input value="Submit New Target to This Engagement" class="bg-green-700 p-2" type="submit"/>
                </form>
                
            </div>
        )
    }
}

export default connect(null, {addTarget})(TargetForm)