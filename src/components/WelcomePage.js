import React from 'react'


const WelcomePage = () => {
  return (
    <div>
        <h1>Welcome to FlagNote v0.25</h1>
        <a href="http://localhost:3000/engagements">
          List All Engagements
        </a>
        <br/>
        <a href="http://localhost:3000/engagements/new">
          Create New Engagement
        </a>
    </div>
  )
}

export default WelcomePage