import React from 'react'


const WelcomePage = () => {
  return (
    <div>
        <h1>Welcome to FlagNote v0.01</h1>
        <a href="http://localhost:3000/engagements">
          See Engagements Listing
        </a>
        <br></br>
        <a href="http://localhost:3000/engagements/new">
          New Engagement
        </a>
    </div>
  )
}

export default WelcomePage