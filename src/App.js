import React from 'react';
import {connect} from 'react-redux';
import {fetchEngagements} from './actions/fetchEngagements';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchEngagements({type: 'FETCH_ENGAGEMENTS', payload: {name: 'Generic CTF Challenge'}})
  }

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default connect(null,{fetchEngagements})(App);
