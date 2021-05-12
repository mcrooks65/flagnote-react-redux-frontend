import React from 'react';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/engagements/1')
    .then(response => response.json())
    .then(response => console.log(response.data.attributes.targets[0]))
  }  // Testing pulling targets out of engagement, routed by url /id# 

  render() {
    return (
      <div className="App">
        App
      </div>
    );
  }
}

export default App;
