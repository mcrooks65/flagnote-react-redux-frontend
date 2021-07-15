import React from 'react'
import {Link} from 'react-router-dom'

class Target extends React.Component {

    state = {
        likes: 0
    }

    handleLike = () => {
        this.setState({
            likes: parseInt(this.state.likes) + parseInt(this.props.likeMultiplyer)
        })
    }

    render() {
        return (
            <div class="text-xl">
                <ul> 
                    <li class="p-3" key={this.props.target.id}>
                        <li class="text-3xl font-bold">Hostname: {this.props.target.hostname} - <Link class="underline" to={`/engagements/${this.props.target.engagement_id}/targets/${this.props.target.id}`}>Edit Target</Link> - <button class="underline font-bold" onClick={() => this.handleDelete(this.props.target)}>Delete</button></li>
                        <ul>
                            <li>IP - {this.props.target.ipaddress}</li>
                            <li>Target ID - {this.props.target.id}</li>
                            <li>Engagement ID - {this.props.target.engagement_id}</li>
                            <li>System Info - {this.props.target.sysinfo}</li>
                            <li>Vulnerabilities - {this.props.target.vulns}</li>
                            <li>Log - {this.props.target.log}</li>
                            <li>Loot - {this.props.target.loot}</li>
                            <li>Status - {this.props.target.status}</li>
                            <li class="text-right"><button onClick={() => this.handleLike(this.props.target)}>Like {this.state.likes}</button></li>
                        </ul>
                    </li>
               
                </ul>
            </div>
        )
    }
}

export default Target