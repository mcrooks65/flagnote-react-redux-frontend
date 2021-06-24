import React from 'react'


const WelcomePage = () => {
  return (
    <div class="bg-red-700 font-mono">
      <div class="container max-w-m mx-auto bg-green-700 p-4 shadow-md">
        <p class="text-center text-black text-8xl font-medium">Welcome to FlagNote v0.35</p>
      </div>
      <div class="text-5xl text-center p-12">
        <a class="underline" href="http://localhost:3000/engagements">
          List Active Engagements
        </a>
        <br/>
        <a class="underline" href="http://localhost:3000/engagements/new">
          Create New Engagement
        </a>
      </div>
    </div>
  )
}

export default WelcomePage