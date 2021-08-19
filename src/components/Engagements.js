import React from 'react'
import {Link} from 'react-router-dom'

class Engagements extends React.Component {

  state = {
    sortedEngagements: [...this.props.engagements],
    sorted: false
  }

  componentDidUpdate(prevProps) {
    if(prevProps == this.props){
    } else {
      this.sortEngagements()
    }
  }

  sortEngagements = () => {
    this.state.sorted = !this.state.sorted
    console.log(this.state.sorted)
    if (this.state.sorted === true) {
      let freshProps = [...this.props.engagements]
      this.setState({sortedEngagements: freshProps.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))})
    } else {
      this.setState({sortedEngagements: [...this.props.engagements]})
    }
    console.log(this.state.sortedEngagements)
  }

  render() {
    return ( 
      <div class="container font-mono p-4">
          <h2 class="text-center text-black text-5xl font-bold p-10">Engagements Listing</h2>
          <button class="bg-green-700 p-2" onClick={() => this.sortEngagements()} value='Sort Button'>Sort Button</button>
          <div class="text-2xl font-bold italic underline">
              {this.state.sortedEngagements.map(engagement => 
                  <li class="p-1"key={engagement.id}>
                      <Link to={`/engagements/${engagement.id}`}>{engagement.name}: {engagement.status}</Link>
                  </li> 
              )}
          </div>
      </div>

    )
  }
}
  
export default Engagements