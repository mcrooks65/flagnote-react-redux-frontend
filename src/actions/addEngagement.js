export const addEngagement = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3001/api/v1/engagements', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(engagement => dispatch({type: 'ADD_ENGAGEMENT', payload: engagement}))
    }
  
  }